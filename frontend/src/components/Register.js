import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper
} from "@mui/material";

function Register({onRegister}) {

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    // Check if both email and password are correct
    try {
      const response = await fetch("http:localhost:3001/auth/register",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringfy(data)
      });
      const result = await response.json();

      if (!response.ok){
        setError("general", {
          message: result.error
        })
      }

      alert("Cuenta creada")
    } catch (error) {
      setError("general", {
          message: "Error al crear cuenta"
        })
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper elevation={3} sx={{ padding: 4, width: "100%" }}>
          <Typography component="h1" variant="h5" align="center" gutterBottom>
            Crear Cuenta
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
          >
            <Controller
              name="nombre"
              control={control}
              defaultValue=""
              rules={{
                required: "El nombre es requerido",
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  label="Nombre"
                  type="text"
                  autoComplete="nombre"
                  autoFocus
                  error={!!errors.nombre}
                  helperText={errors.email?.message}
                />
              )}
            />
            <Controller
              name="apellidos"
              control={control}
              defaultValue=""
              rules={{
                required: "El apellido es requerido",
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  label="Apellidos"
                  type="text"
                  autoComplete="apellidos"
                  autoFocus
                  error={!!errors.apellidos}
                  helperText={errors.email?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: "El correo electrónico es requerido",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Dirección de correo electrónico inválida",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  label="Correo electrónico"
                  type="email"
                  autoComplete="email"
                  autoFocus
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: "La contraseña es requerida",
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin="normal"
                  fullWidth
                  label="Contraseña"
                  type="password"
                  autoComplete="current-password"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              )}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Crear cuenta
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Register;
