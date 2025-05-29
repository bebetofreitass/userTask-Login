import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState(true);
  const [reminderMessage, setReminderMessage] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setWelcomeMessage(false);
    }, 100000);

    const timer2 = setTimeout(() => {
      setReminderMessage(false);
    }, 100000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(username, password);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Login
      </Typography>

      {welcomeMessage && (
        <Alert severity="info" sx={{ mb: 2 }}>
          Bem-vindo! Faça login para continuar.
        </Alert>
      )}

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
      >
        <TextField
          label="Usuário"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          InputProps={{
            style: { backgroundColor: 'white', color: 'black' }
          }}
          InputLabelProps={{
            style: { color: '#000' }
          }}
        />

        <TextField
          label="Senha"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            style: { backgroundColor: 'white', color: 'black' }
          }}
          InputLabelProps={{
            style: { color: '#000' }
          }}
        />

        {loading ? (
          <Box>
            <CircularProgress />
          </Box>
        ) : (
          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: '#00ff66',
              color: '#000',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#00cc55' }
            }}
          >
            Entrar
          </Button>
        )}
        {reminderMessage && (
          <Alert severity="warning">
            Acesse:
            Login: emilys
            Senha: emilyspass
<br></br>
---------------------------------------------------------------
<br></br>
            Acesse:
            Login: michaelw
            Senha: michaelwpass
          </Alert>
        )}

        {error && <Alert severity="error">{error}</Alert>}
      </Box>
    </Container>
  );
};

export default Login;
