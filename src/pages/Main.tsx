import React, { useEffect, useState } from 'react';
import { Button, Link, Vexile } from '@/components';

const { ipcRenderer } = require('electron');

export const Main: React.FC = () => {
  const [password, setPassword] = useState<string>('');

  const notification = () => {
    ipcRenderer.send('notification', {
      title: '테스트',
      subtitle: '서브타이틀',
      body: '유도희희히히 세바시',
    });
  };

  const login = async () => {
    console.log('login');
    ipcRenderer.send('passwordPopup');
  };

  useEffect(() => {
    ipcRenderer.on('IPC_PASSWORD', (event, arg) => {
      setPassword(arg);
    });
  }, []);

  return (
    <Vexile fillx filly gap={4} x="center" padding={2}>
      <h1>hi</h1>
      <input type="button" value="notification" onClick={notification} />
      <Link to="/sub">서브페이지로</Link>
      <Button onClick={login}>로그인 창</Button>
      {password && (<h3>입력한 비밀번호 : {password}</h3>)}
    </Vexile>
  );
};
