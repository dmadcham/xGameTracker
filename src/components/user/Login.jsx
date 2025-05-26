import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useState } from "react";
import authApi from "../../api/authApi";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await authApi.post("login", data);
      setMsg(res.data.message);
      // Se borra el login anterior (si lo hay).
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      // Se guardan los datos de sesión (token y username).
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);

      // Redirigir al usuario a otra página tras login
      // Esperar 3 segundos antes redirigir (para dar tiempo a leer el mensaje);
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (err) {
      setMsg(
        err.response?.data?.message || "Ha ocurrido un error al iniciar sesión"
      );
    }
  };

  return (
    <LoginWrapper>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form-title text-uppercase text-white">INICIAR SESIÓN</h2>

        <div className="input-group">
          <input
            className="input-group-field"
            type="text"
            placeholder="Usuario"
            {...register("username", {
              required: "El usuario es obligatorio",
            })}
          />
          <FaUser className="input-group-icon" size={20} />
          {errors.username && (
            <p className="input-group-error">{errors.username.message}</p>
          )}
        </div>

        <div className="input-group">
          <input
            className="input-group-field"
            type="password"
            placeholder="Contraseña"
            {...register("password", {
              required: "La contraseña es obligatoria",
            })}
          />
          <FaLock className="input-group-icon" size={20} />
          {errors.password && (
            <p className="input-group-error">{errors.password.message}</p>
          )}
        </div>

        <div className="form-link" style={{ marginBottom: "10px" }}>
          <p>
            <Link to={"/forgot-password"}>¿Olvidaste tu contraseña?</Link>
          </p>
        </div>

        <button className="form-btn" type="submit">
          Iniciar sesión
        </button>

        <div className="form-link">
          <p>
            ¿No tienes cuenta? <Link to={"/register"}>Regístrate</Link>
          </p>
        </div>

        {msg && (
          <p
            style={{
              color: msg.toLowerCase().includes("exitoso")
                ? "var(--clr-blue-normal)"
                : "var(--clr-pink-normal)",
              marginTop: "1rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {msg}
          </p>
        )}
      </form>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.div`
  position: relative;
  width: 300px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid var(--clr-blue-normal);
  border-radius: 12px;
  background-color: var(--clr-violet-light-transparent);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: var(--clr-white);

  .login-form {
    .form-title {
      text-shadow: 0px 4px 4px 0px #00000040;
      font-size: 40px;
      text-align: center;
    }

    .input-group {
      position: relative;
      width: 100%;
      height: 45px;
      margin: 30px 0;

      &-field {
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        border: 2px solid var(--clr-blue-normal);
        border-radius: 40px;
        color: var(--clr-white);
        padding: 20px 40px 20px 20px;

        &::placeholder {
          color: var(--clr-white);
          opacity: 0.7;
        }
      }

      &-icon {
        position: absolute;
        right: 15px;
        top: 25%;
      }

      &-error {
        color: var(--clr-pink-normal);
      }
    }

    .form-btn {
      width: 100%;
      height: 45px;
      text-align: center;
      border: 1px solid var(--clr-blue-normal);
      padding: 0px 16px;
      color: var(--clr-white);
      font-weight: 600;
      letter-spacing: 0.03em;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: var(--transition-default);

      &:hover {
        background-color: var(--clr-blue-normal);
      }
    }

    .form-link {
      text-align: center;
      margin-top: 20px;

      a {
        color: var(--clr-white);
        text-decoration: none;
        font-weight: 600;
        transition: var(--transition-default);

        &:hover {
          color: var(--clr-blue-normal);
        }
      }
    }
  }
`;
