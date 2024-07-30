import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Work.css';
import Week from './weekComponnet/Week';

function Work() {
  const [display, setDisplay] = useState(true);

  // true krdi display ko update 1st may 2024

  let dayPlan = { 
    "4day1time": ["Chest", "Back", "Rest", "Bicep & Tricep", "Leg & Shoulder", "Rest"],
    "6day1time": ["Chest", "Back", "Bicep", "Tricep", "Shoulder", "Leg"],
    "4day2time": ["Upper Body", "Lower Body", "Rest", "Upper Body", "Lower Body", "Rest"],
    "6day2time": ["Chest & Bicep", "Back & Tricep", "Leg & Shoulder", "Chest & Bicep", "Back & Tricep", "Leg & Shoulder"],
    "bodyweight": ["BWChestBicep","BWRest", "BWBackTricep", "BWRest", "BWShoulderLeg", "BWRest"],
    "notWork": ["It is advised for children under 12 engaging in formal gym workouts or intense bodyweight exercises due to potential risks to their developing bodies."]
  };

  
  const [age, setAge] = useState();
  const [daysPerWeek, setDaysPerWeek] = useState();
  const [trainingFrequency, setTrainingFrequency] = useState();
  const [trainingMonths, setTrainingMonths] = useState();
  const [trainingType, setTrainingType] = useState();
  const [weightGoal, setWeightGoal] = useState('');
  const [trainGoal, setTrainGoal] = useState('');
  const [Mlouput, setMloutput] = useState();
  const [kgGoalSumar, setkgGoalSumar] = useState("");
  const [kgGoalHead, setkgGoalHead] = useState('');
  const [trainSumar, settrainSumar] = useState("");
  const [trainHead, settrainHead] = useState('');


  const [day1, setDay1] = useState('');
  const [day2, setDay2] = useState('');
  const [day3, setDay3] = useState('');
  const [day4, setDay4] = useState('');
  const [day5, setDay5] = useState('');
  const [day6, setDay6] = useState('');

  
  



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'daysPerWeek':
        setDaysPerWeek(Number(value));
        break;
      case 'trainingFrequency':
        setTrainingFrequency(Number(value));
        break;
      case 'trainingMonths':
        setTrainingMonths(Number(value));
        break;
      case 'trainingType':
        setTrainingType(Number(value));
        break;
      case 'weightGoal':
        setWeightGoal(value);
        break;
      case 'trainGoal':
        setTrainGoal(value);
        break;
      default:
        break;
    }
  };

  const handleinput1 =  (e) => {
    setAge(Number(e.target.value))
  }

  useEffect(() => {
    if(Mlouput !== '' && dayPlan[Mlouput]){
    setDay1(dayPlan[Mlouput][0]);
    setDay2(dayPlan[Mlouput][1]);
    setDay3(dayPlan[Mlouput][2]);
    setDay4(dayPlan[Mlouput][3]);
    setDay5(dayPlan[Mlouput][4]);
    setDay6(dayPlan[Mlouput][5]);
  };

    if(display == false){
      if(weightGoal == 'lose'){
        setkgGoalSumar("the principle is simple yet profound: consume fewer calories than your body requires for maintenance. This caloric deficit is the key to unlocking the journey towards your desired weight. By being mindful of your food choices, moderating portion sizes, and maintaining consistency, you can tip the scales in your favor. Remember, it's not just about eating less, but also about nourishing your body with nutrient-dense foods to support overall health. Embrace the power of the caloric deficit, and watch as your efforts translate into tangible results on the scale and in your well-being.");

        setkgGoalHead("Unlocking Weight Loss: The Power of Caloric Deficit");


      }else if(weightGoal == 'maintain'){
        setkgGoalSumar("Maintaining weight requires finding your balance. To determine your maintenance calories accurately, try a Basal Metabolic Rate (BMR) calculator. Your BMR accounts for the calories your body needs at rest, adjusted for activity level to estimate your Total Daily Energy Expenditure (TDEE). Aim to consume a similar amount to sustain your current weight, adjusting as needed. With BMR precision, you can confidently navigate weight maintenance.");

        setkgGoalHead("Maintaining Weight: Balancing with BMR Calculation");


      }else if(weightGoal == 'gain'){
        setkgGoalSumar("the principle remains equally important: consume more calories than your body expends for maintenance. This caloric surplus is the foundation for achieving your weight gain goals. Focus on nutrient-rich, calorie-dense foods, and consider increasing portion sizes to meet your body's increased energy needs. Consistency is key, so aim to consistently exceed your maintenance calorie intake to support healthy weight gain. By embracing the strategy of caloric surplus and making intentional food choices, you can embark on a journey towards achieving your desired weight.");

        setkgGoalHead("Gaining Weight: The Strategy of Caloric Surplus");

      }else {
        setkgGoalSumar("No sumary");
        setkgGoalHead("No heading");
      }
    }

    if(display == false){
      if(trainGoal == 'Strong'){
        settrainHead("Strength Training: Optimal Reps for Results");

        settrainSumar("In strength training, consider two key approaches: isolated and compound exercises. Isolated exercises, focusing on specific muscles, benefit from higher reps (8-12) for muscle definition. Compound exercises engage multiple muscles, favoring lower reps (4-6) for overall strength gains. Incorporate both for balanced progress and optimal results.");

      }else if(trainGoal == 'shredded'){
        settrainHead("Shredded Training: Optimal Reps for Results");
        settrainSumar("For isolated exercises, aim for higher reps (10-15) to define specific muscles. Compound movements benefit from moderate reps (6-10) for balanced strength and definition. Tailor your reps for each exercise to achieve a shredded physique efficiently.");
        
      }else if(trainGoal == 'Strong & Shredded'){
        settrainHead("bodybuilder Training: Optimal Reps for Results");
        settrainSumar("For isolated exercises, aim for moderate to high reps (8-12) to sculpt muscles. Compound movements thrive on lower to moderate reps (6-10) for strength and definition. Balance both for a strong and shredded physique.");
      }else {
        settrainHead("No heading");
        settrainSumar("No sumary");
      }
    }


  }, [Mlouput,kgGoalHead,kgGoalSumar,trainHead,trainSumar]);


  const handleSubmit = () => {
    // You can perform any additional actions here with the input values.
    console.log('Age:', age);
    console.log(typeof age);
    console.log('Days per week:', daysPerWeek);
    console.log(typeof daysPerWeek);
    console.log('Training frequency per muscle:', trainingFrequency);
    console.log(typeof trainingFrequency);
    console.log('Training months:', trainingMonths);
    console.log(typeof trainingMonths);
    console.log('Training type:', trainingType);
    console.log(typeof trainingType);
    console.log('Weight goal:', weightGoal);
    console.log(typeof weightGoal);
    console.log('train goal:', trainGoal);
    console.log(typeof trainGoal);
    
    const fetchData = async () => {
      try {
        const apiUrl = 'http://localhost:5000/mlpredict';
        const requestData = {
          input_1: age,
          input_2: daysPerWeek,
          input_3: trainingFrequency,
          input_4: trainingMonths,
          input_5: trainingType
        };

        const response = await axios.post(apiUrl, requestData);

        // Assuming the API response has a 'show' property
        setMloutput(response.data.predict);

        console.log('this is my predict', Mlouput);
        console.log(typeof Mlouput);
        // if(Mlouput !== '')
        // {
        //   daydata();
        // }
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    
    fetchData();
    
    
    
    setDisplay(false);
  };

  return (
    <>
    
        {display === true ?
          (<>
          <div className="calorie-calculator">
      <div className="header">
        <h1>Training Preferences</h1>
      </div>
      <div className="form">
        <label htmlFor="age">What is your age?</label>
        <input type="number" value={age} onChange={handleinput1}/>
        
        <br />
        <label htmlFor="daysPerWeek">How many days of the week are available?</label>
        <select id="daysPerWeek" name="daysPerWeek" value={daysPerWeek} onChange={handleInputChange}>
          <option value="">Select</option>
          <option value="1">1 Day</option>
          <option value="2">2 Days</option>
          <option value="3">3 Days</option>
          <option value="4">4 Days</option>
          <option value="5">5 Days</option>
          <option value="6">6 Days</option>
        </select>
        <br />
        <label htmlFor="trainingFrequency">How many times do you want to train each muscle?</label>
        <select id="trainingFrequency" name="trainingFrequency" value={trainingFrequency} onChange={handleInputChange}>
          <option value="">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <br />
        <label htmlFor="trainingMonths">For how many months have you been training?</label>
        <select id="trainingMonths" name="trainingMonths" value={trainingMonths} onChange={handleInputChange}>
          <option value="">Select</option>
          <option value="1">Just Started</option>
          <option value="2">A month</option>
          <option value="3">more than a month</option>
        </select>
        <br />
        <label htmlFor="trainingType">What type of training do you like (Bodyweight/gym)?</label>
        <select id="trainingType" name="trainingType" value={trainingType} onChange={handleInputChange}>
          <option value="">Select</option>
          <option value="1">Gym</option>
          <option value="2">Bodyweight</option>
        </select>
        <br />
        <label htmlFor="weightGoal">What is your weight goal?</label>
        <select id="weightGoal" name="weightGoal" value={weightGoal} onChange={handleInputChange}>
          <option value="">Select</option>
          <option value="lose">Lose weight</option>
          <option value="maintain">Maintain weight</option>
          <option value="gain">Gain weight</option>
        </select>
        <br />
        <label htmlFor="trainGoal">What is the reason for your workout?</label>
        <select id="trainGoal" name="trainGoal" value={trainGoal} onChange={handleInputChange}>
          <option value="">Select</option>
          <option value="Strong">Strong body</option>
          <option value="shredded">shredded body</option>
          <option value="Strong & Shredded">Strong & Shredded</option>
        </select>
        <br />
        <br />
        <button type="button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
          </>)
          :
          (<>
                <div className='kgBlog'>
                   <h1 className='kghead'>{kgGoalHead}</h1>
                   <p className='kgsum'>{kgGoalSumar}</p>
                </div>

                <div className='week_display'>
                <Week dayworkout={day1} day="Monday"/>
                <Week dayworkout={day2} day="Tuesday"/>
                <Week dayworkout={day3} day="Wednesday"/>
                <Week dayworkout={day4} day="Thursday"/>
                <Week dayworkout={day5} day="Friday"/>
                <Week dayworkout={day6} day="Saturday"/>
                </div>
                
                <div className='trainBlog'>
                   <h1 className='trainhead'>{trainHead}</h1>
                   <p className='trainsum'>{trainSumar}</p>
                </div>
          </>
          )}
    </>
  );
}

export default Work;



// console.log('Day1 :', day1);
//         console.log(typeof day1);
//         console.log('Day2 :', day2);
//         console.log(typeof day2);
//         console.log('Day3 :', day3);
//         console.log(typeof day3);
//         console.log('Day4 :', day4);
//         console.log(typeof day4);
//         console.log('Day5 :', day5);
//         console.log(typeof day5);
//         console.log('Day6 :', day6);
//         console.log(typeof day6);