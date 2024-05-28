import React from 'react';
import { Box, CssBaseline, Typography, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Image from './zzx.jpg';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3 }}>
      <CssBaseline />
      <StyledAppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="menu"
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            E-Commerce Store
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <img src={Image} alt="About Us" style={{ width: '50%', borderRadius: '8px', marginBottom: 20 }} />
        <Typography variant="h1" gutterBottom>Zaid's Store</Typography>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Welcome to Our E-Commerce Store!
          </Typography>
          <Typography variant="body1" paragraph>
            Explore our wide range of products and enjoy a seamless shopping experience.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid omnis, fuga harum earum cupiditate sed reiciendis repellat accusantium voluptatem? Quasi dolorum minus fugit laboriosam voluptatibus placeat quos nesciunt voluptas nihil enim, quaerat molestias odio. Sint maiores tempore modi qui minus dicta officiis, adipisci, dolorem ullam ut nulla numquam non iure eum maxime alias. Facere enim dolores cupiditate sequi qui sint odit? Aspernatur veniam accusantium, adipisci aut minima incidunt provident iste quos at ratione reprehenderit ad a sit placeat consequatur? Possimus id esse quaerat pariatur magnam totam, non voluptate voluptatibus delectus excepturi veniam vitae eos expedita, ex voluptatum iure autem quod asperiores iste illo enim odio sed? Fugit, quidem dignissimos saepe nostrum doloribus veniam? Facere molestias sit dolorem voluptas neque reiciendis asperiores sunt facilis unde, eos ea iste sequi dolorum aperiam accusamus fuga corporis, deleniti debitis eum similique assumenda rem? Vel, iste. Eos id minima accusamus nobis quo non quas delectus dolorem at voluptates ad magnam nihil, vitae vel pariatur molestiae aliquid! Sint, voluptates, doloremque, iusto veritatis illo assumenda fugit in eligendi itaque exercitationem eveniet recusandae dolorum voluptatibus reprehenderit tenetur deserunt autem ut quo? Quod, aliquid natus optio corporis aspernatur quisquam eligendi dolor enim maiores quam suscipit quos eius reiciendis laborum totam ipsa doloribus nobis quas voluptatum facere animi non ullam recusandae ipsum? Rerum molestiae doloremque perspiciatis asperiores, voluptate autem fuga consectetur nam eos veritatis ipsa corrupti harum alias tenetur aliquam excepturi incidunt assumenda vitae reprehenderit suscipit, velit illum rem voluptatibus? Ipsam nihil officia ad facilis eaque distinctio doloremque eveniet a sint quidem ullam voluptatum porro molestias numquam tempore, facere illo non soluta vel? Debitis reiciendis numquam a provident sequi deserunt illo magnam. Earum, esse dolor. Saepe eaque aliquam voluptas a praesentium in distinctio aut quibusdam dolorum nulla est, ex magnam dolores id ipsa. Quos quod ratione nobis molestias voluptas delectus mollitia atque excepturi dolorem nulla vel eos, saepe repudiandae totam obcaecati ab ipsa rerum quaerat ad incidunt provident facilis. Consequatur rem nostrum quod iusto saepe vel ad eaque? Doloribus nemo, natus quasi, ipsa architecto, quas tenetur earum labore praesentium debitis sint explicabo. Reprehenderit, tempore veritatis, maiores recusandae consequatur nemo praesentium qui molestias blanditiis sapiente dicta non aspernatur. Similique vero atque qui illo dignissimos nihil doloremque rem labore eius reprehenderit. Quidem iusto atque cumque, tenetur eos reprehenderit provident vero delectus, numquam fugiat laudantium sit ab, ratione hic? Totam dolor hic beatae atque voluptatibus maiores nihil ut doloribus quam itaque cupiditate adipisci eum iure officia tempore ducimus eligendi recusandae laudantium aspernatur modi, non rem repudiandae! Quos rerum atque consectetur? Fugit temporibus, ipsa odit hic cum officiis optio omnis rem molestiae? Magnam quibusdam quia voluptas reiciendis quaerat alias quo culpa consectetur, deserunt, vero veniam aliquam aut praesentium atque provident tenetur. Itaque laudantium quo excepturi architecto id quod doloribus obcaecati similique voluptatibus cupiditate laboriosam iure ab aspernatur, fugit facere vel fugiat labore saepe vero eos repellendus necessitatibus officiis debitis reprehenderit. Ex, accusamus explicabo? Deleniti magnam reiciendis cupiditate eius possimus omnis fugiat tempora amet voluptates nostrum ex, numquam voluptatum tenetur laborum perferendis architecto, veniam iste.
          </Typography>
          {/* Add more content such as product listings, promotions, etc. */}
        </Box>
      </Box>
    </Box>
  );
}
