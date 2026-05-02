export function localDateKey(dateInput) {
  const d = typeof dateInput === "string" ? new Date(dateInput) : new Date(dateInput);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function sixMonthsAgoIso() {
  const d = new Date();
  d.setMonth(d.getMonth() - 6);
  return d.toISOString();
}

export function streakFromMoodRows(rows) {
  if (!rows?.length) return 0;
  const dateSet = new Set(rows.map((r) => localDateKey(r.created_at)));
  const sortedNewestFirst = [...dateSet].sort((a, b) => b.localeCompare(a));
  const anchor = sortedNewestFirst[0];
  const [y, mo, d] = anchor.split("-").map(Number);
  let cursor = new Date(y, mo - 1, d, 12, 0, 0, 0);
  let streak = 0;
  while (dateSet.has(localDateKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

export function groupMoodEntriesByMonth(rows) {
  const byMonth = new Map();
  for (const row of rows) {
    const monthKey = row.created_at.slice(0, 7);
    if (!byMonth.has(monthKey)) byMonth.set(monthKey, []);
    byMonth.get(monthKey).push(row);
  }
  return [...byMonth.entries()]
    .sort((a, b) => b[0].localeCompare(a[0]))
    .map(([monthKey, items]) => ({
      monthKey,
      entries: [...items].sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      ),
    }));
}

export function latestEntryPerCalendarDay(rows) {
  const sorted = [...(rows ?? [])].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  const map = new Map();
  for (const row of sorted) {
    const key = localDateKey(row.created_at);
    if (!map.has(key)) map.set(key, row);
  }
  return map;
}

export function graphSeriesLastSevenDays(rows) {
  const byDay = latestEntryPerCalendarDay(rows);
  const series = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setHours(12, 0, 0, 0);
    d.setDate(d.getDate() - i);
    const key = localDateKey(d);
    const row = byDay.get(key);
    series.push({
      day: d.toLocaleDateString("en-US", { weekday: "short" }),
      val: row?.mood_score ?? 0,
    });
  }
  return series;
}