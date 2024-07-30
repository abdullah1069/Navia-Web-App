import React, { useEffect, useState } from 'react';
import './Week.css';

function Week(props) {
  const [display, setDisplay] = useState(true);

  let muscleExercise = {
    "Chest": ["1. Incline Bench Press", "2. Bench Press", "3. Dumbbell Incline Bench Press", "4. Dumbbell Bench Press", "5. Chest Fly (Dumbbell/Cables)"],
    "Back": ["1. Lat Pulldown wide Grip", "2. Pull-ups", "3. Bent Over Rows", "4. Cable Rows", "5. Seated Dumbbell Rows"],
    "Bicep": ["1. Bicep Curls", "2. Hammer Curl", "3. Preacher Curl", "4. Incline Curls", "5. Wrist Roller"],
    "Tricep": ["1. Tricep Pushdown Cable", "2. Tricep Extension Dumbbell", "3. Bench Press (Close Grip)", "4. Tricep Extension Single Dumbbell", "5. Dumbbell Shrugs"],
    "Shoulder": ["1. Overhead Press (Front shoulder Grip)", "2. Overhead Press (Back wide Grip)", "3. Lateral Raise (Dumbbell)", "4. Front Raise Dumbbell", "5. Reverse Fly (Machine/dumbbell/Cable)"],
    "Leg": ["1. Squats", "2. Calf Raise", "3. Leg Press", "4. Leg Extension", "5. Lying Leg Curls"],
    "Rest": ["Do some stretching to reduce the soreness of the muscles and help them recover faster."],
    "Full Body": ["1. Squats", "2. Bench Press", "3. Bent-Over Rows", "4. Overhead Shoulder Press", "5. Deadlifts", "6. Lunges", "7. Plank"],
    "Upper Body": ["1. Bench Press", "2. Pull-Ups", "3. Overhead Shoulder Press", "4. Tricep Dips", "5. Bicep Curls", "6. Face Pulls", "7. Forearm Plank"],
    "Lower Body": ["1. Squats", "2. Deadlifts", "3. Lunges", "4. Leg Press", "5. Leg Curls", "6. Calf Raises", "7. Plank"],
    "Chest & Bicep": ["1. Incline Bench Press (Barbell)", "2. Bicep Curl (Barbell)", "3. Bench Press (Barbell)", "4. Hammer Curl (Dumbbell)", "5. Chest Fly (Dumbbell)", "6. Preacher Curl (Machine)", "7. Incline Curl (Dumbbell)"],
    "Back & Tricep": ["1. Pull-ups", "2. Tricep Pushdown (Cable-Straight Bar)", "3. Lat Pulldown - Wide Grip (Cable)", "4. Tricep Extension (Dumbbell)", "5. Bent Over Row (Barbell)", "6. Bench Press - Close Grip (Barbell)", "7. Seated Row (Cable)"],
    "Leg & Shoulder": ["1. Overhead Press", "2. Squat", "3. Lateral Raise", "4. Leg Press", "5. Front Raise", "6. Leg Extension", "7. Dumbbell Reverse Flyes", "8. Lying Leg Curl"],
    "BWChestBicep": ["Push-ups", "Wide Grip Push-ups", "Diamond Push-ups", "Bicep Curls", "Incline Push-ups"],
    "BWBackTricep": ["Pull-ups", "Chin-ups", "Tricep Dips", "Close Grip Push-ups", "Bodyweight Rows"],
    "BWShoulderLeg": ["Bodyweight Squats", "Lunges", "Pike Push-ups", "Jumping Lunges", "Plank"],
    "BWRest": ["Rest day with stretching and flexibility exercises"]
  };

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  const [work, setWork] = useState([]);
  const day = props.dayworkout;


  useEffect(() => {
    const dayExercises = muscleExercise[day];
    if (dayExercises) {
      setWork(dayExercises);
      console.log("list is ", work);
    }
  }, [day]);
  

  


  return (
    <>
      <div className='day_box' onClick={toggleDisplay}>
        <h1 className='dayhead'>{props.day}</h1>
        <div className={`day_info ${display ? 'visible' : ''}`}>
          <h2 className='mushead'>{day}</h2> 
              {
                work.map((exercise, index) => (
                  <p key={index}>{exercise}</p>
                ) 
                  )
              }
            
        </div>
      </div>
    </>
  );
}

export default Week;
