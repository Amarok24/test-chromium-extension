const sendMessageId = document.getElementById("sendmessageid");


function guidGenerator()
{
	const S4 = function ()
	{
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	};
	return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}


function MyResponse(response)
{
	/*
	If an error occurs while connecting to the specified tab, the callback is called with no arguments and runtime.lastError is set to the error message.
	*/

	console.log(response.farewell); // where is this displayed???
	alert("MyResponse triggered");
/*
	if (!response)
	{
		alert("some error occured");
	}
 */

	//window.close();
}


function MyCallBack(tabs)
{
	/*
	chrome.tabs.sendMessage(tabId: number, message: any, options: object, responseCallback: function)
	*/

	chrome.tabs.sendMessage(
		tabs[0].id,
		{
			url: chrome.extension.getURL("images/stars.jpeg"),
			imageDivId: `${guidGenerator()}`,
			tabId: tabs[0].id
		},
		MyResponse
	);
}


if (sendMessageId)
{
	sendMessageId.onclick = function ()
	{
		// chrome.tabs.query = Gets all tabs that have the specified properties, or all tabs if no properties are specified.
		chrome.tabs.query({ active: true, currentWindow: true }, MyCallBack);
	};
}
