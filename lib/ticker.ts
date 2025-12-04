import tickerData from "@/app/data/ticker.json";

export type TickerItem = {
  id: number;
  entryId: number;
  label: string;
  hasAnomaly: boolean;
  text: string;
  residue: string;
};

// Return all ticker items, ordered by id
export function getAllTickerItems(): TickerItem[] {
  const data = tickerData as { items?: TickerItem[] };
  const items = data.items ?? [];
  return [...items].sort((a, b) => a.id - b.id);
}

// Return the most recent N ticker items (by id)
export function getLatestTickerItems(limit: number = 4): TickerItem[] {
  const items = getAllTickerItems();
  return items.slice(-limit);
}

// Convenience: split anomalies vs normal items if we ever want to style them differently
export function splitTickerByAnomaly(
  items?: TickerItem[]
): {
  normal: TickerItem[];
  anomalies: TickerItem[];
} {
  const source = items ?? getAllTickerItems();
  const normal: TickerItem[] = [];
  const anomalies: TickerItem[] = [];

  for (const item of source) {
    if (item.hasAnomaly) {
      anomalies.push(item);
    } else {
      normal.push(item);
    }
  }

  return { normal, anomalies };
}
