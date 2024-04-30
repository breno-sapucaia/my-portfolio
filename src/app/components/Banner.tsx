'use client'
import {
  Box,
  Container,
  IconButton,
  Link,
  Typography,
  useTheme,
} from '@mui/material'
import Image from 'next/image'
import moment from 'moment'
import GithubLogo from '@/icons/GithubLogo.svg'
import InstagramLogo from '@/icons/InstagramLogo.svg'
import Linkedin from '@/icons/linkedin.svg'
const Banner = () => {
  const theDate = moment({
    day: 1,
    month: 1,
    year: 2019,
  })
  const theme = useTheme()

  return (
    <Box
      pt="80px"
      sx={{
        backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#161616',
      }}
    >
      <Container maxWidth="lg">
        <Box display="flex" gap="32px">
          <Box
            sx={{
              position: 'relative',
              minWidth: 200,
              maxHeight: 200,
              borderRadius: 200,
              overflow: 'hidden',
            }}
          >
            <Image
              src="/me.jpg"
              alt="eu"
              priority
              fill={true}
              style={{ objectFit: 'cover' }}
            />
          </Box>
          <Box display="flex" flexDirection="column" gap={'26px'}>
            <Typography variant="h1" fontWeight={700} color="text.primary">
              I’m Breno Sapucaia, and welcome to my portfolio.
            </Typography>
            <Typography variant="body2" color="text.light" fontWeight={600}>
              Here you will be able to find some about my experience so far
              working as web developer for long{' '}
              {Math.ceil(moment.duration(moment().diff(theDate)).asYears())}{' '}
              years, It is a pleasure to have you here and, please, scroll it
              down! {':)'}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" mt={15} justifyContent="flex-end" gap={2}>
          <Link href="https://github.com/breno-sapucaia" target="_blank">
            <IconButton>
              <GithubLogo
                fill={theme.palette.mode === 'light' ? '#000' : '#fff'}
              />
            </IconButton>
          </Link>
          <Link
            href="https://www.linkedin.com/in/breno-sapucaia/"
            target="_blank"
          >
            <IconButton>
              <Linkedin
                fill={theme.palette.mode === 'light' ? '#000' : '#fff'}
              />
            </IconButton>
          </Link>
          <Link
            href="https://www.instagram.com/sapu.io/?theme=dark"
            target="_blank"
          >
            <IconButton>
              <InstagramLogo
                fill={theme.palette.mode === 'light' ? '#000' : '#fff'}
              />
            </IconButton>
          </Link>
        </Box>
      </Container>
      <Box
        mt={5}
        position="relative"
        height={500}
        maxHeight={500}
        overflow="hidden"
        width="100%"
      >
        <Image
          src="/code.png"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          objectFit="cover"
          alt="code"
          placeholder="blur"
          blurDataURL="data:image/png;base64,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"
        />
      </Box>
    </Box>
  )
}

export default Banner
