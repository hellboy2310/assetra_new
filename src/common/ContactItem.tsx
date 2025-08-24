// Contact Item Component
export const ContactItem = ({ icon: Icon, title, value, withBorder }) => (
  <div className="relative flex flex-col md:flex-row md:items-start gap-6 md:gap-16">
    {/* Icon */}
    <div className="flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 bg-primaryColor rounded-full flex items-center justify-center z-10 mx-auto md:mx-0">
      <Icon className="w-6 h-6 text-white" />
    </div>

    {/* Text */}
    <div className="flex-1 text-center md:text-left mt-2 md:mt-0">
      <h3 className="text-blackDiffType font-medium text-sm lg:text-h6 mb-1">{title}</h3>
      <p className="text-customGray text-medSmall whitespace-pre-line">{value}</p>
    </div>

    {/* Border */}
    {withBorder && (
      <div className="hidden md:block absolute left-8 w-px h-48 border-l-2 border-dashed border-primaryColor/40"></div>
    )}
  </div>
);


// Input Field Component
export const InputField = ({ id, label, placeholder, register }) => (
  <div className="flex flex-col w-full space-y-6">
    <label htmlFor={id} className="text-customGray text-sm font-medium mb-1">{label}</label>
    <input
      id={id}
      {...register}
      placeholder={placeholder}
      className="border-b border-bt-gray-300 p-2 w-full focus:outline-none focus:border-primaryColor transition-colors"
    />
  </div>
);
