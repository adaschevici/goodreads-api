import React, { Component } from 'react'
import { Box, Card, Button, Flex, Link } from 'rebass'
import { Label, Input } from '@rebass/forms'
import { typography } from '../../typography'
import theme from '../../theme'

const { Body } = typography

export default class Register extends Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    rePassword: '',
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  render() {
    const { onRegister, githubAuthUrl } = this.props
    const { fullName, email, password, rePassword } = this.state
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
        sx={{ height: '100vh' }}
      >
        <Box width={[1, 1 / 2, 1 / 2, 1 / 4, 1 / 4, 1 / 4]}>
          <Card
            sx={{
              p: 1,
              borderRadius: 2,
              boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
            }}
          >
            <Box p={2}>
              <Label htmlFor="fullName">
                <Body lineHeight={0}>Full Name</Body>
              </Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="Jane Doe"
                onChange={this.handleChange}
                sx={{
                  borderRadius: 5,
                  borderColor: '#DCDCDC',
                }}
              />
            </Box>
            <Box p={2}>
              <Label htmlFor="email">
                <Body lineHeight={0}>Email</Body>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="jane@example.com"
                onChange={this.handleChange}
                sx={{
                  borderRadius: 5,
                  borderColor: '#DCDCDC',
                }}
              />
            </Box>
            <Box p={2}>
              <Label htmlFor="Password">
                <Body lineHeight={0}>Password</Body>
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="your password here..."
                onChange={this.handleChange}
                sx={{
                  borderRadius: 5,
                  borderColor: '#DCDCDC',
                }}
              />
            </Box>
            <Box p={2}>
              <Label htmlFor="rePassword">
                <Body lineHeight={0}>Confirm Password</Body>
              </Label>
              <Input
                id="rePassword"
                name="rePassword"
                type="password"
                placeholder="confirm the password..."
                onChange={this.handleChange}
                sx={{
                  borderRadius: 5,
                  borderColor: '#DCDCDC',
                }}
              />
            </Box>
            <Box p={2} width={[1]}>
              <Button
                width={[1]}
                mr={2}
                onClick={() =>
                  onRegister(fullName, email, password, rePassword)
                }
                sx={{ backgroundColor: theme.colors.blues[1] }}
              >
                Register
              </Button>
            </Box>
            <Box p={2} width={[1]}>
              <Link href={githubAuthUrl}>
                <Button
                  width={[1]}
                  mr={2}
                  onClick={() => {}}
                  sx={{ backgroundColor: theme.colors.blues[1] }}
                >
                  Sign up with Github
                </Button>
              </Link>
            </Box>
          </Card>
        </Box>
      </Flex>
    )
  }
}
