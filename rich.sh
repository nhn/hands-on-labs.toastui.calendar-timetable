hook_url=https://hook.dooray.com/services/TODO
curl -H "Content-Type: application/json" -X POST -d '{"botName": "MyBot", "botIconImage": "https://translate.nhnent.com/icon/botimage.jpg", "text":"TODO_TEXT","attachments":[{"title":"", "titleLink": "", "text":"", "color": "darkgreen"}]}' $hook_url
