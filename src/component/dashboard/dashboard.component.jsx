import { Button, TextField } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import { db } from '../../config/firebase'
import * as DS from './dashboard.style'
import { RetrospectiveList } from '../retrospective-list'

export const Dashboard = () => {
  const [list, setList] = useState([])
  const [retrospectiveName, setRetrospectiveName] = useState('')

  // vreau sa chem ceva o singura data
  useEffect(() => {
    // si asa facem ceva o singura data
    db
      .collection('retrospective')
      .onSnapshot(snapshot => {
        setList(snapshot.docs.map(retrospective => ({
          id: retrospective.id,
          ...retrospective.data()
        })))
        // console.log(snapshot.size)
      })
  }, [])

  const deleteItem = id => {
    console.log(`Sterge-l pe ala cu id: ${id}`)
    db
      .collection('retrospective')
      .doc(id)
      .delete()
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

  console.log(list)

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
          type="submit"
        >
          Create retrospective
        </Button>
        <RetrospectiveList sterge={deleteItem} list={list} />
      </DS.StyledFormWrapper>
    </form>
  )
}
