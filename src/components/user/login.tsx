// src/components/user/login.tsx
import {
    TextInput,
    PasswordInput,
    //Checkbox,
    Anchor,
    Paper,
    Title,
    //Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';
  import classes from './css/login.module.css';


const LoginPage = () => {

    return (
        <Container size="lg" px="xs" my={40}>
          <Title ta="center" className={classes.title}>
            Welcome back!
          </Title>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput 
                label="Username" 
                placeholder="Your Username" 
                required
                classNames={{ input: classes.input }}
            />
            <PasswordInput label="Password" placeholder="Your password" required mt="md" />
            <Group justify="space-between" gap="lg" mt="lg">
               
              <Anchor component="button" size="sm">
                Forgot password?
              </Anchor>
            </Group>
            <Button fullWidth mt="xl">
              Sign in
            </Button>
          </Paper>
        </Container>
      );
    }
export default LoginPage;
