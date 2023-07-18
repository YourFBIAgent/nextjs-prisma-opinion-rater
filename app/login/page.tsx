import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function Login() {
    return (
        <>
            <Typography variant="h3">Login</Typography>
            <form style={{ width: "70%" }}>
                <Box 
                    display='flex'
                    flexDirection='column'
                    sx={{ gap: 3 }}>
                    <TextField required label="Username" sx={{ width: 1 }} />
                    <TextField
                        required
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        sx={{ width: 1 }}
                    />
                    <Button
                        variant="contained">
                        Login
                    </Button>
                </Box>
            </form>
            <Box display="flex" justifyContent="flex-end" sx={{ width: 1 }}>
                <Link
                    style={{ fontSize: ".9rem", color: "royalblue" }}
                    href="/signup"
                >
                    Don&apos;t have an account? Sign Up
                </Link>
            </Box>
        </>
    );
}