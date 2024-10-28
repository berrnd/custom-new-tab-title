function OnTabActivated(e)
{
	browser.tabs.get(e.tabId).then((tab) =>
	{
		ApplyTitleToTab(tab);
	});
}

function OnTabChanged(id, change, tab)
{
	ApplyTitleToTab(tab);
}

function ApplyTitleToTab(tab)
{
	browser.storage.sync.get("CustomTitle").then((res) =>
	{
		var customTitle = res.CustomTitle || "";

		if (tab.url.toLowerCase() == "about:newtab")
		{
			browser.windows.update(tab.windowId, {
				"titlePreface": customTitle
			});
		}
		else
		{
			browser.windows.update(tab.windowId, {
				"titlePreface": ""
			});
		}
	});
}

browser.tabs.onActivated.addListener(OnTabActivated);
browser.tabs.onUpdated.addListener(OnTabChanged);
