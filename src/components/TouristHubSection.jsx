import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './SectionHeading'
import { useCounterAnimation } from '../hooks/useCounterAnimation'

const DESTINATIONS = [
  {
    name: "Raja's Seat",
    icon: 'wb_sunny',
    km: 5,
    drive: '10 Mins Only',
    desc: "The seasonal flower garden where the historical Kings of Kodagu sat to watch magnificent crimson sunsets across misted ridges.",
    img: 'https://lh3.googleusercontent.com/aida/AEtjO1WO0-o0vhfiu5brsDsz-bT5cA8IV5omVKaQ2yYw8Uk3LbidpVQIcTCRaYpCemiMMi78yPLlINss_XpKkpcPimSf9pcghPskjXrizYAvP1fkHTN0KDUK8MZN0fcOmGAiipaiz_HHFTaJWRbd1YfuOwq0x0EPpK_tvgY7aKmGQ2OmWBRsnGKDwxVTyvQtnwXLnf8CFIgMxBNZASC97r46dXC5A0Vm_IgMqDcNTd2iGQz3iyJVBktkTLJ0MpQ',
    alt: "Raja's Seat garden monument overlooking misty sunset hills",
    delay: '100ms',
  },
  {
    name: 'General Cariappa Memorial',
    icon: 'military_tech',
    km: 5,
    drive: '10 Mins Only',
    desc: 'Honoring Field Marshal K.M. Cariappa with wartime archives, historic military tanks, and deep Kodava martial heritage.',
    img: 'https://lh3.googleusercontent.com/aida/AEtjO1W8pIgNNnx1lrbuxL4Sjom5cXEca0wH8v-52ML_qTKTvcp3j7ueOe1qvn34L-D1dVnaWOKS-EF56vU9ywpwHIncwyoCZBjojn9kMQ_xBUdqTESfKENs3bOjSFHFftmgggbfFnD9PZR_p93BQzJi55QgYrPanaQbG5tDov41Cc8FxzC9QdFXGqfKpLRZ7AUmGfrnjsQiZt6Y-12X1Hkabt3sDpOccCPBeAUPFQzDX9nztKhjQYKSkcpakA',
    alt: 'Field Marshal Cariappa Memorial museum with historic tank display',
    delay: '200ms',
  },
  {
    name: 'Omkareshwara Temple',
    icon: 'temple_hindu',
    km: 5,
    drive: '12 Mins Drive',
    desc: 'Ancient 1820 CE sanctuary with Gothic & Islamic architectural dome surrounding an auspicious pond filled with freshwater fish.',
    img: 'https://lh3.googleusercontent.com/aida/AEtjO1VlWWQ-_Npl8IoMO_X9kwx4g6ikdmI7TILEgKFIKBT1j_5pYKpN5VRfotbqv2l5-3g7WcT4CsIo6K2h--vYi7sp-SZvI8vofPhJqQqRmpi67Bh3wAZGfUv5kRBr_UOAniWWIezCc3ErP47ME_glnN3TGEaS_kbJwxWG-cjuaJLdvRsjWBWCDCBrjDIh-Uct9Kikx2O1A6Mx2R4MzcKFeuAjfBxHxho4yNGBtdHbUMI54pytahniHBB-gwQ',
    alt: 'Historic Omkareshwara Temple with central dome and fish pond walkway',
    delay: '300ms',
  },
  {
    name: 'Abbey Falls',
    icon: 'waterfall_chart',
    km: 10,
    drive: '20 Mins Drive',
    desc: 'Roaring waterfall cascade nestled inside private spice groves and coffee greenery. Reached via scenic paved routes.',
    img: 'https://lh3.googleusercontent.com/aida/AEtjO1VlaHqm_9pA_ffJGUuBnatFFHxCSFvYPzLTbC_4RceX8LTwEoPZdVpcO-bP5b5iHUSKLf196OLwr0L6GzL7W6ykuZ_8HGD4D365YFlNSu-XPz-3KK0nQAzjt6UzrGVfP_geSzv7rllwlQPD5vGzWdRTqNiRY5MffUnnDhxM9xM2kxPm-hvCrNL-JIREPZSUpu6VrMwhHw_4Mk-I0MzdAnHUDwtCClzz0nMVDB6iel1RsDHpR4aMAayd1u4',
    alt: 'Abbey Falls cascading waterfall surrounded by dense tropical foliage',
    delay: '400ms',
  },
]

function KmCounter({ target }) {
  const [ref, value] = useCounterAnimation(target)
  return <span ref={ref}>{value || 0}</span>
}

export default function TouristHubSection() {
  const revealRef = useScrollReveal()

  return (
    <section className="w-full py-space-2xl bg-surface-container-low border-t border-outline-variant/30" id="tourist-hub" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-gutter">

        <div className="reveal-item text-center max-w-3xl mx-auto mb-space-xl">
          <SectionHeading
            overline="Strategic Location Advantage"
            overlineIcon="pin_drop"
            title="The Geometric Epicenter of Madikeri"
            subtitle="Stay centrally located without bumpy remote mountain bypasses. Access Coorg's most revered heritage sites, waterfalls, and viewpoints in minutes with zero commute fatigue."
            center
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-xl">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.name}
              className="reveal-item bg-surface-container rounded-lg overflow-hidden flex flex-col justify-between relative group hover:bg-surface-container-high transition-all duration-500 border border-outline-variant/30 hover:border-primary/60 shadow-lg hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
              style={{ transitionDelay: dest.delay }}
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={dest.img}
                  alt={dest.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/20 to-transparent" />
                <div className="absolute top-3 right-3 bg-surface-container-lowest/85 backdrop-blur-md px-2 py-0.5 rounded border border-outline-variant/30 text-primary font-headline-sm text-headline-sm font-bold">
                  <KmCounter target={dest.km} /> KM
                </div>
              </div>
              <div className="p-space-lg pt-2 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-primary mb-1">
                    <span className="material-symbols-outlined text-[20px]">{dest.icon}</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                      {dest.name}
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">{dest.desc}</p>
                </div>
                <div className="pt-space-sm flex items-center justify-between font-label-caps text-label-caps text-on-surface-variant uppercase border-t border-outline-variant/20">
                  <span>Drive Time</span>
                  <span className="text-primary font-semibold">{dest.drive}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Access banner */}
        <div className="reveal-item w-full bg-surface-container border border-outline-variant/40 rounded-lg p-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md shadow-xl hover:border-primary/50 transition-all duration-300">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
              <span className="material-symbols-outlined text-[26px]">local_parking</span>
            </div>
            <div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                Smooth Paved Access & Secured Private Parking
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Full all-weather tarmac access right to the resort gates. Ample private vehicle and SUV parking on estate grounds.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/919019563004?text=Hello,%20please%20send%20the%20exact%20Google%20Map%20location%20and%20driving%20route%20for%20Coorg%20Heritage%20Resort."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sheen flex-shrink-0 inline-flex items-center gap-space-xs bg-primary-container hover:bg-primary text-on-primary-container px-space-md py-2.5 rounded font-label-md text-label-md font-semibold transition-all duration-300 shadow-sm hover:-translate-y-0.5 active:scale-98"
          >
            <span className="material-symbols-outlined text-[18px]">navigation</span>
            <span>Get Google Route & Map</span>
          </a>
        </div>

      </div>
    </section>
  )
}
