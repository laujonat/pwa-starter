// export async function copyPageUrl() {
//   try {
//     await navigator.clipboard.writeText(location.href);
//     console.log('Page URL copied to clipboard');
//   } catch (err) {
//     console.error('Failed to copy: ', err);
//   }
// }
// export async function getClipboardContents() {
//   async function postMessage(message: string) {
//     let text = navigator.clipboard.readText();
//     if(navigator.serviceWorker && navigator.serviceWorker.controller) {
//       console.log("client trying to send: ", text, message)
//       navigator.serviceWorker.controller.postMessage({
//         type: 'MESSAGE_IDENTIFIER',
//         msg: text,
//         blob: message
//       });
//     }
//   }
//   try {
//     const clipboardItems = await navigator.clipboard.read();
//     for (const clipboardItem of clipboardItems) {
//       for (const type of clipboardItem.types) {
//         const blob = await clipboardItem.getType(type);
//         await postMessage(URL.createObjectURL(blob));
//       }
//     }

//   } catch (err) {
//     console.error(err);
//   }
// }
