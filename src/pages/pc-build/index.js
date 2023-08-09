import RootLayout from '@/layout/RootLayout';
import { Button, Divider } from 'antd';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const PcBuild = () => {
  const { pc } = useSelector(state => state.pc)
  let productarray = []
  console.log("🚀 ~ file: index.js:10 ~ PcBuild ~ productarray:", productarray)
  return (
    <div style={{ marginTop: "40px", marginBottom: "20px" }}>
      <div>
        <p style={{ textAlign: "center", fontSize: "20px" }}>Build Your Deram Pc Here</p>
      </div>
      <div style={{ width: "600px", margin: "0 auto", marginTop: "30px", padding: "10px" }}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

            <div style={{ display: "flex", gap: "10px", alignItems: "-moz-initial" }} >
              {
                pc?.processor.image ? <img style={{ height: "100px", objectFit: "contain" }} src={pc?.processor?.image} /> : <img src='https://www.startech.com.bd/catalog/view/theme/starship/images/cpu.svg' />
              }
              <div style={{ width: "100%", display: "flex", gap: "30px", alignItems: "center", justifyContent: "space-between" }}>
                <div >
                  <p style={{ fontWeight: "600" }}>CPU</p>
                  <p style={{ width: "100%", fontWeight: "400" }}>{pc?.processor.name}</p>
                </div>
                {
                  pc?.processor.price && <p style={{ fontWeight: "400" }}> $ {pc?.processor.price}</p>
                }
              </div>
            </div>
            {
              !pc?.processor.price ?
                <Link href="/pc-build/processor"><Button onClick={() => {
                  productarray.push('cpu')
                }} type="primary" ghost>
                  Chosse
                </Button>
                </Link> : <Link href="/pc-build/processor">replace</Link>
            }

          </div>

        </div>
        <Divider />

        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

            <div style={{ display: "flex", gap: "10px", alignItems: "-moz-initial" }} >
              {
                pc?.motherboard.image ?
                  <img style={{ height: "100px", objectFit: "contain" }} src={pc?.motherboard?.image} /> :
                  <img src='https://www.startech.com.bd/catalog/view/theme/starship/images/motherboard.svg' />
              }
              <div style={{ width: "100%", display: "flex", gap: "30px", alignItems: "center", justifyContent: "space-between" }}>
                <div >
                  <p style={{ fontWeight: "600" }}>Motherboard</p>
                  <p style={{ width: "100%", fontWeight: "400" }}>{pc?.motherboard.name}</p>
                </div>
                {
                  pc?.motherboard.price && <p style={{ fontWeight: "400" }}> $ {pc?.motherboard.price}</p>
                }

              </div>
            </div>
            {
              !pc?.motherboard.price ?
                <Link href="/pc-build/motherboard"><Button onClick={() => {
                  productarray.push('motherboard')
                }} type="primary" ghost>
                  Chosse
                </Button>
                </Link> : <Link href="/pc-build/motherboard">replace</Link>
            }

          </div>

        </div>

        <Divider />

        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

            <div style={{ display: "flex", gap: "10px", alignItems: "-moz-initial" }} >
              {
                pc?.ram.image ?
                  <img style={{ height: "100px", objectFit: "contain" }} src={pc?.ram?.image} /> :
                  <img src='https://www.startech.com.bd/catalog/view/theme/starship/images/ram.svg' />
              }
              <div style={{ width: "100%", display: "flex", gap: "30px", alignItems: "center", justifyContent: "space-between" }}>
                <div >
                  <p style={{ fontWeight: "600" }}>RAM</p>
                  <p style={{ width: "100%", fontWeight: "400" }}>{pc?.ram.name}</p>
                </div>
                {
                  pc?.ram.price && <p style={{ fontWeight: "400" }}> $ {pc?.ram.price}</p>
                }
              </div>
            </div>
            {
              !pc?.ram.price ?
                <Link href="/pc-build/ram"><Button onClick={()=>{
                  productarray.push('ram')
                }} type="primary" ghost>
                  Chosse
                </Button>
                </Link> : <Link href="/pc-build/ram">replace</Link>
            }

          </div>

        </div>

        <Divider />

        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

            <div style={{ display: "flex", gap: "10px", alignItems: "-moz-initial" }} >
              {
                pc?.powerSupply.image ?
                  <img style={{ height: "100px", objectFit: "contain" }} src={pc?.powerSupply?.image} /> :
                  <img src='https://www.startech.com.bd/catalog/view/theme/starship/images/psupply.svg' />
              }
              <div style={{ width: "100%", display: "flex", gap: "30px", alignItems: "center", justifyContent: "space-between" }}>
                <div >
                  <p style={{ fontWeight: "600" }}>Powe Supply</p>
                  <p style={{ width: "100%", fontWeight: "400" }}>{pc?.powerSupply.name}</p>
                </div>
                {
                  pc?.powerSupply.price && <p style={{ fontWeight: "400" }}> $ {pc?.powerSupply.price}</p>
                }
              </div>
            </div>
            {
              !pc?.powerSupply.price ?
                <Link href="/pc-build/power-supply"><Button onClick={()=>{
                  productarray.push('power')
                }} type="primary" ghost>
                  Chosse
                </Button>
                </Link> : <Link href="/pc-build/power-supply">replace</Link>
            }

          </div>

        </div>

        <Divider />

        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

            <div style={{ display: "flex", gap: "10px", alignItems: "-moz-initial" }} >
              {
                pc?.storage.image ?
                  <img style={{ height: "100px", objectFit: "contain" }} src={pc?.storage?.image} /> :
                  <img src='https://www.startech.com.bd/catalog/view/theme/starship/images/hdd.svg' />
              }
              <div style={{ width: "100%", display: "flex", gap: "30px", alignItems: "center", justifyContent: "space-between" }}>
                <div >
                  <p style={{ fontWeight: "600" }}>Storage</p>
                  <p style={{ width: "100%", fontWeight: "400" }}>{pc?.storage.name}</p>
                </div>
                {
                  pc?.storage.price && <p style={{ fontWeight: "400" }}> $ {pc?.storage.price}</p>
                }
              </div>
            </div>
            {
              !pc?.storage.price ?
                <Link href="/pc-build/storage"><Button onClick={()=>{
                  productarray.push('storage')
                }} type="primary" ghost>
                  Chosse
                </Button>
                </Link> : <Link href="/pc-build/storage">replace</Link>
            }

          </div>

        </div>
        <Divider />

        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

            <div style={{ display: "flex", gap: "10px", alignItems: "-moz-initial" }} >
              {
                pc?.monitor.image ?
                  <img style={{ height: "100px", objectFit: "contain" }} src={pc?.monitor?.image} /> :
                  <img src='https://www.startech.com.bd/catalog/view/theme/starship/images/monitor.svg' />
              }
              <div style={{ width: "100%", display: "flex", gap: "30px", alignItems: "center", justifyContent: "space-between" }}>
                <div >
                  <p style={{ fontWeight: "600" }}>Monitor</p>
                  <p style={{ width: "100%", fontWeight: "400" }}>{pc?.monitor.name}</p>
                </div>
                {
                  pc?.monitor.price && <p style={{ fontWeight: "400" }}> $ {pc?.monitor.price}</p>
                }
              </div>
            </div>
            {
              !pc?.monitor.price ?
                <Link href="/pc-build/monitor"><Button onClick={()=>{
                  productarray.push('monitor')
                }} type="primary" ghost>
                  Chosse
                </Button>
                </Link> : <Link href="/pc-build/monitor">replace</Link>
            }

          </div>

        </div>
        <Divider />

        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

            <div style={{ display: "flex", gap: "10px", alignItems: "-moz-initial" }} >
              {
                pc?.others.image ?
                  <img style={{ height: "100px", objectFit: "contain" }} src={pc?.others?.image} /> :
                  <img src='https://www.startech.com.bd/catalog/view/theme/starship/images/ram.svg' />
              }
              <div style={{ width: "100%", display: "flex", gap: "30px", alignItems: "center", justifyContent: "space-between" }}>
                <div >
                  <p style={{ fontWeight: "600" }}>Others</p>
                  <p style={{ width: "100%", fontWeight: "400" }}>{pc?.others.name}</p>
                </div>
                {
                  pc?.others.price && <p style={{ fontWeight: "400" }}> $ {pc?.others.price}</p>
                }
              </div>
            </div>
            {
              !pc?.others.price ?
                <Link href="/pc-build/others"><Button onClick={()=>{
                  productarray.push('others')
                }} type="primary" ghost>
                  Chosse
                </Button>
                </Link> : <Link href="/pc-build/others">replace</Link>
            }

          </div>

        </div>
        <Divider />
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button disabled={productarray.length >= 5} type="primary" style={{ marginTop: "30px" }}>Order now</Button>
        </div>

      </div>

    </div>
  );
};

export default PcBuild;
PcBuild.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}