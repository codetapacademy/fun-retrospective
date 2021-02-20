import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebase'

export const Dashboard = () => {
  const [list, setList] = useState([])
  // vreau sa chem ceva o singura data
  useEffect(() => {
    // si asa facem ceva o singura data
    db.collection('felix-si-brando').onSnapshot(snapshot => {
      setList(snapshot.docs.map(test => ({
        id: test.id,
        ...test.data()
      })))
      // console.log(snapshot.size)
    })
  }, [])

  const adaugaAcumaSauTeFacPunctePunctePuncte = () => {
    // vrem sa adaugam ceva intr-o baza de date smecheroasa
    db.collection('felix-si-brando').add({
      name: 'Super eroii',
      age: 912234,
      qualities: [
        'nice',
        'smart',
        'funny',
        'razatoare',
        'unicorn trainer',
        'smiley',
        'brando',
        'happy',
        'cool',
        'bright',
        'water',
        'catel',
        'latrat',
        'ham-ham',
        'miau miau',
        'bunny',
      ].sort(() => Math.random() - 0.5).slice(0, Math.round(Math.random() * 7))
    })
  }

  const deleteItem = id => {
    console.log(`Sterge-l pe ala cu id: ${id}`)
    db.collection('felix-si-brando').doc(id).delete()
  }

  return (
    <div>
      <h1>Gigi</h1>
      <Button
        variant="contained"
        color="secondary"
        onClick={adaugaAcumaSauTeFacPunctePunctePuncte}
      >
        Add something to the db
      </Button>

      <div>
        <ul>
          {list.map(({ age, name, qualities, id }) => {
            return (
              <li>
                <div>{age}</div>
                <div>{name}</div>
                <div>
                  <div>
                    {qualities.map(quality => <span style={{color: 'green'}}>{quality} </span> )}
                  </div>
                  <Button onClick={() => deleteItem(id)}>&times;</Button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
