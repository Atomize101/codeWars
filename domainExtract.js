function domainName(url) {
  const a = document.createElement("a");
  a.href = url;
  const { hostname } = a;
  const hostSplit = hostname.split(".");
  hostSplit.pop();
  if (hostSplit.length > 1) {
    hostSplit.shift();
  }
  return hostSplit.join();
}
domainName("https://twitter.com/explore");
