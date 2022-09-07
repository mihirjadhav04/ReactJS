import React from 'react'

function Summary({details}) {

  let rows = [];

  for(let step in details){
    for (let row in details[step]){
      rows.push(
        <tr>
          <td>{details[step][row]['name']}</td>
          <td>{details[step][row]['value']}</td>
        </tr>
      )
    }
  }

  return (
    <div>
      <h3>Summary</h3>
      <table>
        <tr>
          <th>Details</th>
          <th>Information</th>
        </tr>
        {rows}
      </table>
    </div>
  )
}

export default Summary