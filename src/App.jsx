import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let dataFighters = [
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ];

  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setFighters] = useState([...dataFighters])
  const [totalStrength, setStrength] = useState(0)
  const [totalAgility, setAgility] = useState(0)


  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      const newCurrency = money - fighter.price
      const newAgility = totalAgility + fighter.agility
      const newStrength = totalStrength + fighter.strength
      const newTeam = [...team, fighter]
      setTeam(newTeam)
      setMoney(newCurrency)
      setAgility(newAgility)
      setStrength(newStrength)
    } else {
      alert(`Not enough money to buy ${fighter.name}`)
    }
  }

  const handleRemoveFighter = (fighter, index) => {
    const newCurrency = money + fighter.price
    const newAgility = totalAgility - fighter.agility
    const newStrength = totalStrength - fighter.strength
    team.splice(index, 1)
    setMoney(newCurrency)
    setAgility(newAgility)
    setStrength(newStrength)
  }

  return (
    <>
      <div>
        <h1>Zombie Fighter</h1>
        <h2>Currency: {money}</h2>
        <h2>Team Strength: {totalStrength}</h2>
        <h2>Team Agility: {totalAgility}</h2>
        <h2>My Team</h2>
        <div className='team'>
          {team.length
            ? team.map((item, index) => (
              <div key={index} className='card'>
                <img src={item.img} alt="fighter" />
                <p>Name: {item.name}</p>
                <p>Price: {item.price}</p>
                <p>Strength: {item.strength}</p>
                <p>Agility: {item.agility}</p>
                <button onClick={() => handleRemoveFighter(item, index)}>remove</button>
              </div>
            ))
            : 'Pick some team members!'}
        </div>

        <h2>Choose your Fighters</h2>
        <div className='fighters'>
          {zombieFighters.map((item, index) => (
            <div key={index} className='card'>
              <img src={item.img} alt="fighter" />
              <p>Name: {item.name}</p>
              <p>Price: {item.price}</p>
              <p>Strength: {item.strength}</p>
              <p>Agility: {item.agility}</p>
              <button onClick={() => handleAddFighter(item)}>Add</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
