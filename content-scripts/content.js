
/*
https://docs.microsoft.com/en-gb/microsoft-edge/extensions-chromium/getting-started/

https://docs.microsoft.com/en-gb/microsoft-edge/extensions-chromium/developer-guide/api-support

https://developer.chrome.com/docs/extensions/mv3/messaging/
https://developer.chrome.com/docs/extensions/reference/runtime/
https://developer.chrome.com/docs/extensions/reference/tabs/

*/

function MyListener(request, sender, sendResponse)
{
	$("head").prepend(
		`<style>
		  .slide-image {
			  height: auto;
			  width: 100vw;
			}
		 </style> `
	);

	$("body").prepend(
		`<img src="${request.url}" id="${request.imageDivId}" class="slide-image" /> `
	);

	$(`#${request.imageDivId}`).click( function()
	{
		$(`#${request.imageDivId}`).remove(`#${request.imageDivId}`);
	});

	sendResponse({ farewell: "goodbye" });
}


// Listener gets fired when a message is sent from either an extension process (by sendMessage) or a content script (by tabs.sendMessage).
chrome.runtime.onMessage.addListener(MyListener);
