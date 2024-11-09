import ultralytics
from ultralytics import YOLO
import time
import cv2
from collections import Counter
import supervision as sv
import os


phone_number = None
total_cows = None
youtube_url = None

def set_user_info(phone, cows, url):
    global phone_number, total_cows, youtube_url
    phone_number = phone
    total_cows = cows
    youtube_url = url
    main()

def show_recording(model):
    source = youtube_url
    #source = #"https://www.youtube.com/watch?v=QhLMlA3Wb8w&t=19s"  # Example YouTube URL
    frame_width, frame_height = 640, 480  # Adjust these values to fit your screen

    # Run inference on the source with streaming enabled
    results = model(source, stream=True, conf = .5)

    # Loop over each frame in the results
    for result in results:
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

def main():
    model = YOLO('C:/Users/shabi/OneDrive/Desktop/moo_vision/moo-vision/server/venv/moo_vision_v1.pt')
    
    #load custom cow detection model
    show_recording(model)
    time.sleep(8)

if __name__ == "__main__":
    main()