import { Button } from '@material-ui/core'
import React from 'react'
import { db } from '../../config/firebase'

export const Dashboard = () => {
  const adaugaAcumaSauTeFacPunctePunctePuncte = () => {
    // vrem sa adaugam ceva intr-o baza de date smecheroasa
    console.log('yeee, a venit razatoarea')
    db.collection('felix-si-brando').add({
      name: 'Super eroii',
      age: 912234,
      qualities: [
        'nice',
        'smart'
      ]
    })
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
    </div>
  )
}
