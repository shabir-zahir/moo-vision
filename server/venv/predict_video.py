import ultralytics
from ultralytics import YOLO
import time
import cv2
from collections import Counter
import supervision as sv
import os
import time
import requests

def alert_frontend():
    url = 'http://localhost:8080/api/process'
    data = { 'missing_cows' : 'true'}
    response = requests.post(url, json=data)
    if response.status_code == 200:
        result = response.json()  # Parse the response JSON
        print("Response from backend:", result)
    else:
        print(f"Failed to send data: {response.status_code}")
def compare_cows(curr_cows, total_cows, mismatch_start, time_window):
    if curr_cows == total_cows:
        mismatch_start = time.time()
    else:
        curr_time = time.time()
        if curr_time - mismatch_start > time_window:
            alert_frontend()
            pass
    return mismatch_start

def show_recording(model, phone_number, total_cows, youtube_url):
    source = youtube_url
    time_window = 5 # if we do not detect our cow count for 5 seconds text user
    #source = "https://www.youtube.com/watch?v=QhLMlA3Wb8w&t=19s"  # Example YouTube URL
    frame_width, frame_height = 640, 480  # Adjust these values to fit your screen

    # Run inference on the source with streaming enabled
    results = model(source, stream=True, conf = .5)
    
    mismatch_start = time.time() 
    # timer that indicates when the two cow counts STARTED to deviate

    # Loop over each frame in the results
    for result in results:
        curr_cows = len(result)
        mismatch_start = compare_cows(curr_cows, total_cows, mismatch_start, time_window)
        print(len(result), 'NUMBER OF COWS')
        frame = result.orig_img  # Get the original frame

        # Annotate frame with detection results (bounding boxes, labels, etc.)
        annotated_frame = result.plot()  # Automatically adds bounding boxes and labels

        # Resize the frame to the desired resolution
        resized_frame = cv2.resize(annotated_frame, (frame_width, frame_height))
        # Display the resized frame
        cv2.imshow("YOLO Real-Time Detection", resized_frame)

        # Break the loop if 'q' is pressed
        if cv2.waitKey(1) & 0xFF == ord("q"):
            break

# Release resources
cv2.destroyAllWindows()

def main(phone_number, total_cows, youtube_url):
    alert_frontend()
    model = YOLO('server/venv/moo_vision_v1.pt')
    
    #load custom cow detection model
    show_recording(model, phone_number, total_cows, youtube_url)
    time.sleep(8)

if __name__ == "__main__":
    main()