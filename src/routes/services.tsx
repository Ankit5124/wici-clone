import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useVirtualizer } from '@tanstack/react-virtual'
import { useRef, useMemo } from 'react'
import { Loader2, Search, SlidersHorizontal, PlusCircle, Database } from 'lucide-react'
import { useKioskStore } from '@/store/kioskStore'
import { MOCK_SERVICES, CATEGORIES, type ServiceItem } from '@/data/servicesData'

export const Route = createFileRoute('/services')({
  component: ServicesDirectoryComponent,
})

function ServicesDirectoryComponent() {
  const {
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    openServiceModal,
  } = useKioskStore()

  const { data = [], isLoading } = useQuery<ServiceItem[]>({
    queryKey: ['services-catalog'],
    queryFn: async () => {
      await new Promise((res) => setTimeout(res, 180))
      return MOCK_SERVICES
    },
    staleTime: 1000 * 60 * 5,
  })

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.department.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [data, selectedCategory, searchQuery])

  const columnHelper = createColumnHelper<ServiceItem>()

  const columns = useMemo(
    () => [
      columnHelper.accessor('id', {
        header: 'ID',
        size: 80,
        cell: (info) => <span className="font-mono text-cyan-400 font-bold">#{info.getValue()}</span>,
      }),
      columnHelper.accessor('name', {
        header: 'Service Name',
        size: 340,
        cell: (info) => (
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 truncate">{info.getValue()}</span>
            <span className="text-[11px] font-mono text-slate-400">{info.row.original.department}</span>
          </div>
        ),
      }),
      columnHelper.accessor('category', {
        header: 'Category',
        size: 170,
        cell: (info) => (
          <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-slate-900 text-cyan-300 border border-cyan-500/20">
            {info.getValue()}
          </span>
        ),
      }),
      columnHelper.accessor('fee', {
        header: 'Fee',
        size: 110,
        cell: (info) => {
          const val = info.getValue()
          return (
            <span className={`font-mono font-bold ${val === 0 ? 'text-emerald-400' : 'text-slate-100'}`}>
              {val === 0 ? 'FREE' : `₹ ${val}`}
            </span>
          )
        },
      }),
      columnHelper.accessor('status', {
        header: 'SLA Duration',
        size: 130,
        cell: (info) => {
          const val = info.getValue()
          const color =
            val === 'Instant'
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
              : val === '1-3 Days'
                ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
          return (
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border ${color}`}>
              {val}
            </span>
          )
        },
      }),
      columnHelper.display({
        id: 'actions',
        header: 'Action',
        size: 120,
        cell: (info) => (
          <button
            onClick={() =>
              openServiceModal({
                id: info.row.original.id,
                name: info.row.original.name,
                department: info.row.original.department,
                fee: info.row.original.fee,
              })
            }
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-500/15 hover:bg-orange-500 text-orange-400 hover:text-white hover:scale-105 active:scale-95 border border-orange-500/40 text-xs font-mono font-bold uppercase transition-all cursor-pointer"
          >
            <PlusCircle className="w-3.5 h-3.5" /> Apply
          </button>
        ),
      }),
    ],
    [columnHelper, openServiceModal],
  )

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const tableContainerRef = useRef<HTMLDivElement>(null)
  const { rows } = table.getRowModel()

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => 54,
    overscan: 12,
  })

  return (
    <div className="flex flex-col gap-5">
      {/* Search Header Glass Filter */}
      <div className="flex flex-col gap-4 p-5 rounded-2xl glass-panel-glow border border-orange-500/30">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-slate-900 border border-orange-500/30 text-orange-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white tracking-tight">Public Services Directory</h2>
              <p className="text-xs text-slate-300 font-mono">1,200 Virtualized DPI Nodes Loaded</p>
            </div>
          </div>

          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-cyan-400" />
            <input
              type="text"
              placeholder="Search records, departments, ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
            />
          </div>
        </div>

        {/* Category Pills in Flexbox */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-800">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/40 scale-105'
                    : 'glass-panel hover:bg-slate-800 text-slate-300 hover:scale-105'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>MATCHES: {filteredData.length}</span>
          </div>
        </div>
      </div>

      {/* Virtual Table with Cyber Styling */}
      <div
        ref={tableContainerRef}
        className="h-[560px] overflow-auto rounded-2xl glass-panel border border-slate-800/90 shadow-2xl"
      >
        <table className="w-full text-left text-sm border-collapse">
          <thead className="sticky top-0 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 z-10 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="p-4" style={{ width: `${header.getSize()}px` }}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              position: 'relative',
            }}
          >
            {isLoading ? (
              <tr>
                <td colSpan={columns.length} className="p-12 text-center text-slate-400 font-mono">
                  <Loader2 className="w-6 h-6 animate-spin mx-auto text-orange-400 mb-2" />
                  QUERYING DPI LEDGER...
                </td>
              </tr>
            ) : rows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="p-12 text-center text-slate-400 font-mono">
                  NO ENTRIES FOUND MATCHING SEARCH CRITERIA
                </td>
              </tr>
            ) : (
              rowVirtualizer.getVirtualItems().map((virtualRow) => {
                const row = rows[virtualRow.index]
                return (
                  <tr
                    key={row.id}
                    className="hover:bg-slate-800/60 border-b border-slate-800/40 transition flex items-center"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: `${virtualRow.size}px`,
                      transform: `translateY(${virtualRow.start}px)`,
                    }}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="p-4 overflow-hidden text-ellipsis whitespace-nowrap"
                        style={{ width: `${cell.column.getSize()}px` }}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
