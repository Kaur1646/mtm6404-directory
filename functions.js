// 1️ list() function
// Takes an array of clients and returns an HTML string using map()
function list(clients) {
  return clients
    .map(
      (client, index) => `
<li class="list-group-item d-flex justify-content-between" data-index="${index}">
  ${client.name}
  <strong>$${client.balance}</strong>
</li>`
    )
    .join(""); // Join all <li> elements into one string
}

// 2️ order() function
// Takes an array of clients and a property name, returns a sorted array
function order(clients, property) {
  return [...clients].sort((a, b) => {
    if (a[property] < b[property]) return -1;
    if (a[property] > b[property]) return 1;
    return 0;
  });
}

// 3️ total() function
// Takes an array of clients and returns the total of all balances
function total(clients) {
  return clients.reduce((sum, client) => sum + client.balance, 0);
}

// 4️ info() function
// Takes an index and returns the matching client's object
function info(index) {
  return clients.find((client, i) => i === index);
}

// 5️ search() function
// Takes a query string and returns clients whose names include the query (case-insensitive)
function search(query) {
  const lowerQuery = query.toLowerCase();
  return clients.filter((client) =>
    client.name.toLowerCase().includes(lowerQuery)
  );
}
