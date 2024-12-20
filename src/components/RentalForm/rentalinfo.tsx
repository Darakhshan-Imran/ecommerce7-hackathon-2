export default function RentalInfo() {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">Rental Info</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p>Pick-up</p>
            <input type="text" placeholder="Location" className="input" />
            <input type="date" className="input mt-2" />
          </div>
          <div>
            <p>Drop-off</p>
            <input type="text" placeholder="Location" className="input" />
            <input type="date" className="input mt-2" />
          </div>
        </form>
      </div>
    );
  }
  