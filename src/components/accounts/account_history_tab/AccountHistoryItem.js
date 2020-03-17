import React from 'react'

export const AccountHistoryItem = () => {

  const textHeight = 'text-sm-2'
  const textAlignment = 'text-center'

  return (
    <tr className='account-history-item'>
      <td className={`${textHeight}  ${textAlignment} col-date`}>2020/02/18</td>
      <td className={`${textHeight} ${textAlignment} col-action`}>Wallet Created</td>
      <td className={`${textHeight} ${textAlignment} text-success col-area`}>Rewards</td>
      <td className={`${textHeight} ${textAlignment} text-success col-subject`}>Resardis</td>
      <td className={`${textHeight} ${textAlignment} text-success col-info`}>
        Basic information about action will place here.
      </td>
      <td className={`text-sm-3 text-success ${textAlignment} col-status`}>In Progress</td>
    </tr>
  )
}
