hook_url=https://hook.dooray.com/services/TODO
curl -H "Content-Type: application/json" -X POST -d '{"botName": "MyBot", "botIconImage": "https://myserver.com/botimage.jpg", "text":"Dooray!"}' $hook_url
