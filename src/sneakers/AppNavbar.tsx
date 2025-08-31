import { DarkMode, LightMode } from "@mui/icons-material";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import { Avatar, Box, Button, IconButton } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";  // ✅ useNavigate added

type AppNavbarProps = {
  toggleMode: () => void;
  mode: "light" | "dark";
};

const AppNavbar = ({ toggleMode, mode }: AppNavbarProps) => {
  const navItems = [
    { label: "sneakers", path: "/sneakers" },
    { label: "collections", path: "/collections" },
    { label: "men", path: "/men" },
    { label: "women", path: "/women" },
    { label: "about", path: "/about" },
    { label: "contact", path: "/contact" },
  ];

  const navigate = useNavigate(); // ✅ navigate hook

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 3,
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        {/* Left side: buttons */}
        <Box sx={{ display: "flex", gap: 3 }}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              component={NavLink}
              to={item.path}
              sx={{
                color: "text.primary",
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                fontWeight: ({ isActive }: any) => (isActive ? "bold" : "normal"),
                textTransform: "capitalize",
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Right side: Cart + Avatar */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* ✅ Clickable cart that goes to /cart */}
          <IconButton onClick={() => navigate("/cart")}>
            <AddShoppingCart />
          </IconButton>

          <IconButton onClick={toggleMode}>
            {mode === "light" ? <DarkMode /> : <LightMode />}
          </IconButton>

          <Avatar
            alt="User Profile"
            src="/myAvatar1.jpg" // ✅ fixed: remove "public/"
            sx={{ width: 40, height: 40 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AppNavbar;
