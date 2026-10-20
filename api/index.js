export default function handler(req, res) {
    console.log("=========================================");
    console.log("🎯 ПОЙМАН ЗАПРОС ОТ HH.RU!");
    console.log("IP отправителя:", req.headers['x-forwarded-for'] || req.socket.remoteAddress);
    console.log("User-Agent:", req.headers['user-agent']);
    console.log("Метод:", req.method);
    console.log("Путь:", req.url);
    console.log("=========================================");
    
    res.status(200).send('OK');
}
