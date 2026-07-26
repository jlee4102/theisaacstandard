type Row = { feature: string; values: string[] };

// Instrument head-to-head table: mono 10px headers over a rule-strong underline, no zebra, no
// rounded frame. The FIRST product column (the unit under review) is headed in amber per the
// handoff. Winner-cell semantics need per-row data we don't have — values stay neutral.
export default function ComparisonTable({ headers, rows }: { headers: string[]; rows: Row[] }) {
  return (
    <div className="not-prose overflow-x-auto my-8 border border-rule">
      <table className="w-full border-collapse text-[13px]">
        <thead>
          <tr>
            <th className="text-left py-3 px-4 label-dim border-b border-rule-strong">Metric</th>
            {headers.map((h, i) => (
              <th
                key={h}
                className={`text-left py-3 px-4 font-mono text-[10px] font-medium uppercase tracking-[0.14em] border-b border-rule-strong ${
                  i === 0 ? 'text-accent' : 'text-text-dim'
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.feature} className="hover:bg-surface transition-colors">
              <td className="py-3 px-4 font-mono text-[11px] uppercase tracking-[0.08em] text-text-muted border-t border-rule whitespace-nowrap">
                {r.feature}
              </td>
              {r.values.map((v, i) => (
                <td key={i} className={`py-3 px-4 border-t border-rule ${i === 0 ? 'text-text' : 'text-text-secondary'}`}>
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
