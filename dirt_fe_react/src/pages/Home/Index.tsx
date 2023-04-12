import * as React from 'react';
import { useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  DiReact,
  FaDiscord,
  FaCopy,
  FaGithubAlt,
  SiDjango,
  SiStorybook,
  SiTailwindcss,
  SiVite,
  SiTypescript,
  TbShovel,
  SiPython,
  SiNodedotjs, SiWindows, SiApple, SiLinux,
} from 'react-icons/all';
import {
  H2,
  H3,
  Paragraph,
} from '../../components/shared/Typography/Typography';
import { Card } from '../../components/shared/Card/Card';
import { Label } from '../../components/shared/Label/Label';
import { Badge } from '../../components/shared/Badge/Badge';

const ICON_SIZE = 24;
const InertiaIcon = (
  <svg
    className="block fill-current text-white"
    viewBox="0 0 275.3 50.5"
    style={{ height: '20px' }}
  >
    <path d="M231.2 16.1h-17.8l17.2 17.2-17.2 17.2h17.8l17.2-17.2z"></path>
    <path d="M258.1 16.1h-17.8l17.2 17.2-17.2 17.2h17.8l17.2-17.2z"></path>
    <path d="M6 15.3h10.3l-6 34.2H0l6-34.2zm.6-9.1C7.2 2.9 10.3 0 13.7 0s5.7 2.8 5.2 6.2c-.5 3.4-3.7 6.2-7.2 6.2s-5.6-3-5.1-6.2zM54.3 28.5l-3.7 21H40.4L43.8 30c.8-4.4-1.6-6.2-4.9-6.2-3.4 0-6.5 2-7.5 6.6L28 49.5H17.8l6-34.2h10.3l-.5 3.2c2.3-2.6 6.2-4.2 10.1-4.2 6.9.1 12.2 5.1 10.6 14.2zM94.5 32.4c-.1.8-.5 2.7-1.1 4.1H68.9c.6 3.8 3.8 4.8 7 4.8 2.9 0 5.2-.8 7.2-2.7l7.2 5.9c-4 4-8.7 6-15 6-11.8 0-18-8.5-16.3-18.7a20.7 20.7 0 0 1 20.5-17.4c9.8 0 16.9 7.6 15 18zm-9.7-3.7c-.3-3.8-3-5.3-6.2-5.3a8.9 8.9 0 0 0-8.3 5.3h14.5zM123.9 14.6l-2 11.6c-4-.6-10.5.8-11.7 7.8l.1-.4-2.8 15.9H97.3l6-34.2h10.3l-1.1 6.2c2.1-4.7 6.6-6.9 11.4-6.9zM137.8 37.3c-.5 3.1 2 3.3 6.6 2.9l-1.6 9.3c-12.3 1.4-16.9-2.7-15.2-12.2l2.1-12.1h-5.5l1.8-9.9h5.4l1.2-6.5 10.8-3.1-1.7 9.6h7.1l-1.8 9.9h-7l-2.2 12.1zM155.3 15.3h10.3l-6 34.2h-10.3l6-34.2zm.6-9.1c.5-3.3 3.7-6.2 7.1-6.2s5.7 2.8 5.2 6.2c-.5 3.4-3.7 6.2-7.2 6.2s-5.7-3-5.1-6.2zM208.1 15.3l-6 34.2h-10.3l.4-2.3a15.5 15.5 0 0 1-10.3 3.3c-11.1 0-15.3-9.6-13.5-18.9 1.6-8.8 8.6-17.2 19.2-17.2 4.5 0 7.7 1.8 9.6 4.6l.6-3.6h10.3zm-13.2 17.2c.9-5.2-1.9-8.4-6.6-8.4a9.5 9.5 0 0 0-9.5 8.3c-.9 5.1 1.8 8.3 6.6 8.3 4.6.1 8.6-3.1 9.5-8.2z"></path>
  </svg>
);

const CARD_ICON_SIZE = 32;
const Index = (): React.ReactNode => {
  const copyToClipboard = useCallback(() => {
    if ('clipboard' in navigator) {
      return navigator.clipboard
        .writeText('npx @saiforceone/dirt-cli@latest')
        .then(() => {
          toast('Copied to clipboard');
        });
    } else {
      document.execCommand('copy', true, 'npx @saiforceone/dirt-cli@latest');
    }
  }, []);
  return (
    <div className="w-full bg-gradient-to-b from-[#02111B] to-[#30292F]">
      <ToastContainer />
      <div className="flex flex-col container mx-auto md:max-w-6xl gap-y-8 text-center h-full p-4 ">
        <TbShovel className="self-center text-white" size={100} />
        <h1 className="text-white text-center text-8xl font-heading">
          D.I.R.T STACK
        </h1>
        <p className="text-slate-400 text-2xl">
          The modern way of building reactive fullstack Django web applications.
          D.I.R.T combines the power of{' '}
          <span className="font-bold text-white">D</span>
          jango, <span className="font-bold text-white">I</span>
          nertiaJs, Reactivity of{' '}
          <span className="font-bold text-white">R</span>
          eact and smoothness of <span className="font-bold text-white">T</span>
          ailwind CSS.
        </p>
        <div className="mx-auto flex flex-col gap-y-8 w-full sm:max-w-4xl">
          <H2>Ready to get D.I.R.T-y?</H2>
          <Paragraph>
            Getting your project up and running is as easy as copying and
            pasting the command below and answering a few prompts
          </Paragraph>
          <div className="flex mx-auto w-[400px] px-2 py-4 bg-slate-800 border-[#30292F] border-2 text-white rounded items-center justify-between">
            <span className="text-lg font-semibold">
              npx @saiforceone/dirt-cli@latest
            </span>
            <FaCopy
              className="cursor-pointer hover:text-slate-50"
              onClick={copyToClipboard}
              size={ICON_SIZE}
            />
          </div>
          <H3>Prerequisites</H3>
          <Paragraph>
            Before running the CLI, you'll just need to make sure that you have
            the following installed:
          </Paragraph>

          <ul className="max-w-2xl list-none mx-auto">
            <li><Label iconElement={<SiPython className="text-green-600" size={16} />} link="https://www.python.org/downloads/" labelText="Python 3.8 or higher" /></li>
            <li><Label iconElement={<SiPython className="text-green-600" size={16} />} link="https://pipenv.pypa.io/en/latest/" labelText="Pipenv (latest)" /></li>
            <li><Label iconElement={<SiNodedotjs className="text-green-600" size={16} />} link={"https://nodejs.org/"} labelText="NodeJS 16 or higher" /></li>
          </ul>

          <H2>About the D.I.R.T Stack</H2>
          <Paragraph>
            The D.I.R.T Stack was created to simplify the process of scaffolding
            Django projects that utilized libraries and frameworks like React or
            VueJS on the frontend. By taking this approach, you can leverage the
            skills you already have with the Django framework as well{' '}
            <span className="font-semibold text-white">React</span> /{' '}
            <span className="font-semibold text-slate-400">VueJS</span> /{' '}
            <span className="font-semibold text-slate-400">Svelte</span>.
          </Paragraph>
          <H3>
            <span className="font-semibold text-white">D.I.R.T</span>, truly
            down to earth and built on a solid foundation with
          </H3>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <Card
              icon={<SiDjango className="text-white" size={CARD_ICON_SIZE} />}
              heading="Django"
            >
              <Paragraph>
                One of the best ways to build modern fullstack web applications
                complete with authentication built-in and its own ORM.
              </Paragraph>
            </Card>
            <Card icon={InertiaIcon} heading="">
              <Paragraph>
                Described as the new modern monolith, Inertia leverages
                tradition server-side routing while using modern web application
                development
              </Paragraph>
            </Card>
            <Card
              icon={<DiReact className="text-white" size={CARD_ICON_SIZE} />}
              heading="React"
            >
              <Paragraph>
                UI library for building modern web and native user interfaces
                using reusable pieces more affectionately called Components.
              </Paragraph>
            </Card>
            <Card
              icon={<SiTailwindcss className="text-white" size={CARD_ICON_SIZE} />}
              heading="TailwindCSS"
            >
              <Paragraph>
                A utility-first CSS framework that helps you quickly and easily
                craft beautiful and responsive web experiences.
              </Paragraph>
            </Card>
          </div>
          <H3>
            and <span className="text-white">supercharged</span> by
          </H3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Card
              icon={<SiTypescript className="text-white" size={CARD_ICON_SIZE} />}
              heading="Typescript"
            >
              <Paragraph>
                For modern web app development, it just makes sense to use
                Typescript.
              </Paragraph>
            </Card>
            <Card
              icon={<SiVite className="text-white" size={CARD_ICON_SIZE} />}
              heading="Vite"
            >
              <Paragraph>
                We believe that Vite is currently the best development server
                for modern web app development
              </Paragraph>
            </Card>
            <Card
              icon={<SiStorybook className="text-white" size={CARD_ICON_SIZE} />}
              heading="Storybook"
            >
              <Paragraph>
                Design, implement & test your app's UI before getting deep into
                feature implementation
              </Paragraph>
            </Card>
          </div>
          <H2>Supported Platforms</H2>
          <Paragraph>
            We believe that no matter the platform, you should be able to use the <span className="font-semibold">D.I.R.T Stack</span> to create awesome fullstack web applications.
          </Paragraph>
          <ul className="max-w-2xl list-none mx-auto">
            <li>
              <Badge iconElement={<SiWindows />} text="Windows" />
            </li>
            <li>
              <Badge iconElement={<SiApple />} text="MacOS" />
            </li>
            <li>
              <Badge iconElement={<SiLinux />} text="Linux" />
            </li>
          </ul>
        </div>

        <H2>Get Connected</H2>
        <Paragraph>
          Want to get more information about the DIRT Stack or have some ideas
          to share, get in contact with us.
        </Paragraph>
        <div className="flex self-center justify-between w-full text-white">
          <a
            className="flex text-white hover:text-white items-center gap-x-2"
            target="_blank"
            href="https://github.com/saiforceone/dirt-cli"
          >
            <FaGithubAlt size={32} /> <span>Git D.I.R.T-y</span>
          </a>
          <a
            className="flex text-white hover:text-white items-center gap-x-2"
            target="_blank"
            href="https://discord.gg/sY3a5VN3y9"
          >
            <FaDiscord size={32} /> Peanut Cart Express
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
