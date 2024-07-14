import bankTree from '../assets/bank-tree.jpeg'
import IndexCard from '../components/IndexCard'

const Home = () => {
  return (
    <>
      <div className='relative z-50'>
        <img src={bankTree} alt="bank tree" className='w-full  h-72 lg:h-96 object-cover'/>
        <div className="bg-white absolute top-8 max-md:left-1/2 max-md:-translate-x-1/2 md:right-16 p-8 w-64 lg:w-80">
          <h1 className="lg:text-lg font-bold mb-4">No fees. <br /> No minimum deposit. <br /> High interest rates</h1>
          <p className="lg:text-lg text-sm font-light">Open a savings account with Argent Bank today!</p>
        </div>
      </div>
        <section className='lg:flex lg:gap-8'>
          <IndexCard title="You are our #1 priority" description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." icone='chat'/>
          <IndexCard title="More savings means higher rates" description="The more you save with us, the higher your interest rate will be!" icone='cash'/>
          <IndexCard title="Security you can trust" description="We use top of the line encryption to make sure your data and money is always safe." icone='shield'/>
        </section>
    </>
  )
}

export default Home