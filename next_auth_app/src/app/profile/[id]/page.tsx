'use client'

function profile({params}: any) {
    return (  

        <>
        <div className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
            <h2>
                {params.id}
            </h2>
        </div>
        </>
    );
}

export default profile;