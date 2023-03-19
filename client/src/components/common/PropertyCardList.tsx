import { Place, Bed, CropFree } from "@mui/icons-material";
import { Link } from "@pankod/refine-react-router-v6";
import {
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Stack,
} from "@pankod/refine-mui";
import { PropertyCardProps } from "interfaces/property";

const PropertyCardList = ({
  id,
  title,
  price,
  photo,
  location,
}: PropertyCardProps) => {
  return (
    <Card
      component={Link}
      to={`/properties/show/${id}`}
      sx={{
        width: "400px",
        "&:hover": { boxShadow: "0 22px 45px 2px rgba(176,176,176,0.1)" },
        cursor: "pointer",
        display: "flex",
        backgroundColor: "#fcfcfc"
      }}
      elevation={0}
    >
      <CardMedia
        component="img"
        width={201}
        height={125}
        image={photo}
        alt="card images"
        sx={{ borderRadius: "10px", maxWidth: "201px" }}
        style={{ objectFit: "cover", width: "100%" }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "flex-start", 
          padding: "0 10px"
        }}
      >
        <Box
          sx={{
            bgcolor: "#dadefa",
            width: "fit-content",
            height: "fit-content",
            borderRadius: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "3px", 
          }}
        >
          <Typography fontSize={12} fontWeight={600} color="#475be8">
            ${price}
          </Typography>
        </Box>
        <Stack direction="column" gap={1}>
          <Typography fontSize={16} fontWeight={500} color="#11142d">
            {title}
          </Typography>
          <Stack direction="row" gap={0.5} alignItems="flex-start">
            <Place sx={{ fontSize: 18, color: "#808191", marginTop: 0.5 }} />
            <Typography fontSize={14} color="#808191">
              {location}
            </Typography>
          </Stack>
          <Stack direction="row" gap={2} alignItems="flex-start">
            <Stack direction="row" gap={0.5} alignItems="flex-start">
              <Bed sx={{ fontSize: 18, marginTop: 0.5 }} />
              <Typography fontSize={14}>
                2 Beds
              </Typography>
            </Stack>
            <Stack direction="row" gap={0.5} alignItems="flex-start">
              <CropFree sx={{ fontSize: 18, marginTop: 0.5 }} />
              <Typography fontSize={14}>
                55M
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
  
};

export default PropertyCardList;
