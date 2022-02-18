import { useEffect, useRef, useState } from 'react'
import { Rain, RainDrop } from './component/Rain';
import Nav from './component/Nav';
import Logo4x from './component/Logo4x';
import { Censor, PrintCensor } from './component/Censor';
import { Tab, TabInner } from './component/Tab';
import { boonmotion } from './component/Motion'
import { F1x, F2x, F4x } from './component/Frame';
import logo4x from './assets/image/logo@4x.png'
import { AiFillGithub } from 'react-icons/ai'
import Shield from './component/Shields';
import { ProjectF4x } from './component/Card';

function App() {
  const show = true
  return (
    <>
      <div className='absolute w-full top-0 left-0 mt-5'>
        <Nav></Nav>
      </div>
      <div className='flex flex-col justify-center items-center relative' style={{ 'height': '600px' }}>
        <Rain color={'#C9BBB0'}></Rain>
        <Rain></Rain>
        <Logo4x></Logo4x>
        <div className='relative z-10'>
          <div className='flex flex-col items-center mt-5 text-4xl relative'>
            <boonmotion.FaceUp>
              <boonmotion.Glitch text='boon4681' color='#f3f3f3' />
            </boonmotion.FaceUp>
            <div className={`flex text-base ${show ? '' : 'overline'} decoration-slate-600 absolute top-0 mt-11`}>
              <PrintCensor text={'Passwich Thongruang'} show={show} />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-8'>
        <RainDrop options={{ 'count': 10, 'color': '#070E18', waveLength: 700, waveHeight: 32 }}></RainDrop>
      </div>
      <div className='w-full h-24' style={{'background':'#070E18'}}></div>
      <section>
        <div className='mx-auto w-fit'>
          <div className='flex mx-5 md:mx-0'>
            <div className='text-vertical pr-4 text-xl mt-1'>
              About
            </div>
            <div className='auto mx-9inline img-border-2 pl-12 float-right pb-4 max-w-xl'>
              My name is <Censor text={'Passwich Thongruang'} show={show} />, Nickname "Boon".
              The {new Date().getFullYear() - 2004}-year-old high school student,
              who love to do such a thing that base on programming.
            </div>
          </div>
        </div>
        <div>
          <Tab bg={'#070E18'} color={'#C9BBB0'}>
            <TabInner name="Projects">
              <ProjectF4x
                repo='bncode'
                description='A BN code (an initialism for Boon code) is a type of data storage as an image that design for low resolution work with low data quality. in this version it can be store 32 bit or 4 bytes that can store number from 0 upto 4,294,967,295'
                sheilds={
                  <>
                    <Shield repo='bncode' type={'pypi'} more='color=%23544ccf'></Shield>
                    <Shield repo='bncode' type={'license'} more='color=%23green'></Shield>
                  </>
                }
                readme={
                  <>
                    <div className='auto'>
                      Installation
                    </div>
                    <code className='auto-sm rounded bg-gray-200/90 p-2'>
                      pip install bncode
                    </code>
                  </>
                }
                readme_url='https://github.com/boon4681/bncode#readme'
              />
              <F2x>
                <div className='flex w-full h-full bg-indigo-700/90'>
                  <div className='flex w-full flex-col m-5'>
                    <div className='text-3xl text-white'>
                      <boonmotion.FaceUp>
                        <boonmotion.Print viewport={true}>
                          <boonmotion.Glitch text='numbaht' hover={true} color='rgb(67 56 202)' />
                        </boonmotion.Print>
                      </boonmotion.FaceUp>
                      <div className='auto-sm'>
                        <boonmotion.FaceUp>
                          <boonmotion.Print viewport={true} multiline={true} limit={70}>
                            Convert Thai Baht as Text to Number as Text site: <span className='auto-sm hover:underline'>
                              <a href="https://numbaht.boon4681.com/" target='_blank'>
                                numbaht
                              </a>
                            </span>
                          </boonmotion.Print>
                        </boonmotion.FaceUp>
                      </div>
                    </div>
                    <div className='p-3 pt-0'>
                      <div className='auto text-white'>
                        Installation
                      </div>
                      <code className='auto-sm rounded bg-gray-50/95 text-gray-800 p-2'>
                        npm install numbaht
                      </code>
                    </div>
                    <div className='button-span mt-2'>
                      <a href="https://github.com/boon4681/numbaht" target='_blank'>
                        <div className='text'>GITHUB</div>
                      </a>
                    </div>
                  </div>
                </div>
              </F2x>
              <F2x>
                <div className='flex w-full h-full bg-indigo-700/90'>
                  <div className='flex w-full flex-col m-5'>
                    <div className='text-3xl text-white'>
                      <boonmotion.FaceUp>
                        <boonmotion.Print viewport={true}>
                          <boonmotion.Glitch text='Benchjs' hover={true} color='rgb(67 56 202)' />
                        </boonmotion.Print>
                      </boonmotion.FaceUp>
                      <div className='auto-sm'>
                        <boonmotion.FaceUp>
                          <boonmotion.Print viewport={true} multiline={true} limit={70}>
                            Benchjs - JavaScript benchmark tool Online JavaScript performance benchmark / playground.
                          </boonmotion.Print>
                        </boonmotion.FaceUp>
                      </div>
                    </div>
                    <div className='p-3 text-white flex'>
                      <div className='my-auto'>
                        <Shield repo='benchjs' type={'license'} more='color=white'></Shield>
                      </div>
                    </div>
                    <div className='flex'>
                      <div className='button-span mr-2 mt-2 w-full'>
                        <a href="https://benchjs.boon4681.com/" target='_blank'>
                          <div className='text'>SITE</div>
                        </a>
                      </div>
                      <div className='button-span mt-2'>
                        <a href="https://github.com/boon4681/benchjs" target='_blank'>
                          <div className='text'>GITHUB</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </F2x>
              <F2x>
                <div className='flex w-full h-full bg-slate-100/90'></div>
              </F2x>
              <F1x>
                <div className='flex w-full h-full bg-indigo-700/90'></div>
              </F1x>
            </TabInner>
          </Tab>
        </div>
        <div className='pt-16'></div>
      </section>
      <div className='w-full h-8 -mt-8'>
        <RainDrop options={{ 'count': 10, 'color': '#070E18', waveLength: 700, waveHeight: 10 }}></RainDrop>
      </div>
      <footer>
        <div className='text-xs text-center'>©{`2022${(new Date()).getFullYear()!=2022?'-'+new Date().getFullYear():''}`} boon4681, Passwich Thongruang</div>
      </footer>
    </>
  )
}

export default App
