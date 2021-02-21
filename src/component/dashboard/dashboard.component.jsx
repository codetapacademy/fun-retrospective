import { Button, TextField } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import { db } from '../../config/firebase'
import * as DS from './dashboard.style'

export const Dashboard = () => {
  const [list, setList] = useState([])
  const [retrospectiveName, setRetrospectiveName] = useState('')

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
    
  }

  const deleteItem = id => {
    console.log(`Sterge-l pe ala cu id: ${id}`)
    db.collection('felix-si-brando').doc(id).delete()
  }

  const handleGigiSubmit = e => {
    e.preventDefault()
    if (retrospectiveName.length > 3) {
      db.collection('retrospective').add({
        retrospectiveName
      })

      setRetrospectiveName('')
    }
  }

  const faCevaCuAsta = e => {
    const { value } = e.target
    setRetrospectiveName(value)
  }

  return (
    <form onSubmit={handleGigiSubmit}>
      <DS.StyledFormWrapper>
        <h1>Create a new retrospective</h1>
        <div>
          <TextField
            variant="outlined"
            color="primary"
            label="Restrospective name"
            value={retrospectiveName}
            onChange={faCevaCuAsta}
          />
        </div>
        <Button
          variant="contained"
          color="secondary"
          onClick={adaugaAcumaSauTeFacPunctePunctePuncte}
          type="submit"
        >
          Add something to the db
        </Button>
      </DS.StyledFormWrapper>
    </form>
  )
}
