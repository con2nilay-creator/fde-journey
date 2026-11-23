// Day 4 – reshape a JSON API response with map, filter and reduce
// Run it:  node practice/day-04-json.js
// Fill in each function. Every exercise shows ✅ when your answer is right.

const response = {
  status: "ok",
  data: {
    tickets: [
      { id: 101, title: "Login fails with 401", customer: "Acme Corp", product: "Portal", priority: "high", status: "open", hoursSpent: 3.5, tags: ["auth", "api"] },
      { id: 102, title: "File stuck in review", customer: "Globex", product: "Workflow", priority: "medium", status: "closed", hoursSpent: 2, tags: ["workflow"] },
      { id: 103, title: "Webhook not firing", customer: "Initech", product: "Connector", priority: "high", status: "pending", hoursSpent: 5, tags: ["api", "webhook"] },
      { id: 104, title: "Wrong due date", customer: "Acme Corp", product: "Connector", priority: "low", status: "closed", hoursSpent: 1, tags: ["connector"] },
      { id: 105, title: "Slow project creation", customer: "Umbrella", product: "Portal", priority: "high", status: "closed", hoursSpent: 6, tags: ["performance"] },
      { id: 106, title: "API returns 416", customer: "Globex", product: "Portal", priority: "medium", status: "open", hoursSpent: 4, tags: ["api"] },
      { id: 107, title: "Translation missing", customer: "Initech", product: "Workflow", priority: "low", status: "open", hoursSpent: 0.5, tags: ["workflow"] },
      { id: 108, title: "SSO login loop", customer: "Umbrella", product: "Portal", priority: "high", status: "pending", hoursSpent: 2.5, tags: ["auth"] }
    ]
  }
};

// Get the tickets array out of the response (destructuring)
const { tickets } = response.data;

// 1. map → array of all ticket ids
function ex1(tickets) {
  return tickets.map(t => t.id);
}

// 2. map → all titles in UPPERCASE
function ex2(tickets) {
  return tickets.map(t => t.title.toUpperCase());
}

// 3. filter → only tickets whose status is "open" (keep the full ticket objects)
function ex3(tickets) {
  return tickets.filter(t => t.status === "open");
}

// 4. filter + map → ids of "high" priority tickets that are NOT "closed"
function ex4(tickets) {
  return tickets.filter(t => t.priority === "high" && t.status !== "closed").map(t => t.id);
}

// 5. filter + map → customer names of tickets that have the tag "api"
function ex5(tickets) {
  return tickets.filter(t => t.tags.includes("api")).map(t => t.customer);
}

// 6. reduce → total hoursSpent across all tickets
function ex6(tickets) {
  return tickets.reduce((sum, t) => sum + t.hoursSpent, 0);
}

// 7. reduce → count of tickets per status, e.g. { open: 3, ... }
function ex7(tickets) {
  return tickets.reduce((acc, t) => { acc[t.status] = (acc[t.status] || 0) + 1; return acc; }, {});
}

// 8. reduce → ticket ids grouped by product, e.g. { Portal: [101, ...], ... }
function ex8(tickets) {
  return tickets.reduce((acc, t) => { (acc[t.product] ||= []).push(t.id); return acc; }, {});
}

// 9. map → reshape each ticket into { id, label: "#101 - Login fails with 401 (high)" }
function ex9(tickets) {
  return tickets.map(t => ({ id: t.id, label: `#${t.id} - ${t.title} (${t.priority})` }));
}

// 10. filter + reduce → average hoursSpent of "closed" tickets, rounded to 1 decimal
function ex10(tickets) {
  const c = tickets.filter(t => t.status === "closed"); return Math.round(c.reduce((s, t) => s + t.hoursSpent, 0) / c.length * 10) / 10;
}

// ---------- checker: don't edit below ----------
const expected = {
  ex1: [101, 102, 103, 104, 105, 106, 107, 108],
  ex2: ["LOGIN FAILS WITH 401", "FILE STUCK IN REVIEW", "WEBHOOK NOT FIRING", "WRONG DUE DATE", "SLOW PROJECT CREATION", "API RETURNS 416", "TRANSLATION MISSING", "SSO LOGIN LOOP"],
  ex3: [101, 106, 107],
  ex4: [101, 103, 108],
  ex5: ["Acme Corp", "Initech", "Globex"],
  ex6: 24.5,
  ex7: { open: 3, closed: 3, pending: 2 },
  ex8: { Portal: [101, 105, 106, 108], Workflow: [102, 107], Connector: [103, 104] },
  ex9: tickets.map(t => ({ id: t.id, label: `#${t.id} - ${t.title} (${t.priority})` })),
  ex10: 3
};
const answers = { ex1, ex2, ex3, ex4, ex5, ex6, ex7, ex8, ex9, ex10 };
let score = 0;
for (const [name, fn] of Object.entries(answers)) {
  let got;
  try { got = fn(structuredClone(tickets)); } catch (e) { got = `error: ${e.message}`; }
  if (name === "ex3" && Array.isArray(got)) got = got.map(t => t && t.id);
  const ok = JSON.stringify(got) === JSON.stringify(expected[name]);
  if (ok) score++;
  console.log(`${ok ? "✅" : "❌"} ${name}${ok ? "" : "  got: " + JSON.stringify(got)}`);
}
console.log(`\nScore: ${score}/10`);
