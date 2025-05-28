import React, { useState } from 'react';
// import Cron from './Scheduler/SchedulerForm/Cron/Cron';
import Cron from './Scheduler/SchedulerFormCron3/Cron/Cron';
import {
  Button,
  Card,
  HTMLTable,
  Icon,
  Intent,
  Switch,
} from '@blueprintjs/core';

export default function CronGenerator() {
  const [cron, setCron] = useState('');
  return (
    <div>
      <input value={cron} onChange={(e) => setCron(e.target.value)} />
      <Cron value={cron} onChange={setCron} />
    </div>
  );
  // return (
  //   <div className="test">
  //     <div class="header_container">
  //       <div class="header">Lista zadań</div>
  //       <Button icon="plus">Nowe zadanie</Button>
  //     </div>
  //     <div class="card">
  //       <HTMLTable className="table">
  //         <thead>
  //           <tr>
  //             <th>Nazwa</th>
  //             <th>Typ</th>
  //             <th>Definicja</th>
  //             <th>Status</th>
  //             <th>Info</th>
  //             <th>Akcje</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           <tr>
  //             <td>Nazwa 111/444</td>
  //             <td>Testowy</td>
  //             <td>Definicja</td>
  //             <td>Zaakceptowany</td>
  //             <td>Brak</td>
  //             <td class="actions">
  //               <Icon style={{ marginRight: '10px' }} icon="search" />
  //               <Icon style={{ marginRight: '10px' }} icon="edit" />
  //               <Icon icon="history" />
  //             </td>
  //           </tr>
  //           <tr>
  //             <td>Nazwa 111/444</td>
  //             <td>Testowy</td>
  //             <td>Definicja</td>
  //             <td>Zaakceptowany</td>
  //             <td>Brak</td>
  //             <td class="actions">
  //               <Icon style={{ marginRight: '10px' }} icon="search" />
  //               <Icon style={{ marginRight: '10px' }} icon="edit" />
  //               <Icon icon="history" />
  //             </td>
  //           </tr>
  //         </tbody>
  //       </HTMLTable>
  //     </div>
  //   </div>
  // );
}
