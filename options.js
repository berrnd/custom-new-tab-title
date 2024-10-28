function OnPageLoad()
{
	browser.storage.sync.get("CustomTitle").then((res) =>
	{
		document.querySelector("#custom-title").value = res.CustomTitle || "";
	});
}

function OnPageSave(e)
{
	e.preventDefault();

	browser.storage.sync.set({
		"CustomTitle": document.querySelector("#custom-title").value
	});

	browser.runtime.reload();
}

document.addEventListener("DOMContentLoaded", OnPageLoad);
document.querySelector("form").addEventListener("submit", OnPageSave);
