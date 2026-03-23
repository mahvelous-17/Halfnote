function Sen() {
  const title = "Hi my name is Andrew";
  const description = "I love Toothless";
  const emoji = `⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡞⠉⢱⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢸⠀⠀⠀⢳⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠞⠉⢣⠀⠀⠀⠀
⠀⠀⠀⠀⢻⠀⠀⠀⢸⠁⢀⠀⠀⠀⠀⠀⠀⠀⠀⡾⠀⠀⠘⡆⠀⠀⠀
⠀⠀⠀⠀⠘⡇⠀⠀⢸⢠⣏⣹⣄⣀⣀⡞⢳⡇⠀⠀⠀⢿⠀⠀⠀
⠀⠀⠀⠀⣀⣳⣀⡴⠋⠁⠀⠀⠀⢈⣿⡉⠙⢿⡀⠀⠀⡟⠀⠀⠀
⠀⠀⠀⠀⢻⣘⡟⠀⠀⠀⠀⠀⠀⠀⣿⠄⠀⠀⠹⣄⣸⠁⠀⠀⠀
⠀⡀⠀⠰⡗⠿⠀⣴⣾⡶⢶⣀⠀⢀⣟⠂⢀⣤⣄⣹⢳⠂⠀⠀⠀
⠀⡷⡀⠀⠹⣾⠸⡿⣿⣿⣿⢿⠀⢸⡇⢠⣷⣿⢹⢹⢿⠀⠀⠀⠀
⠘⠳⡌⠙⠚⣏⠣⣙⠺⠯⠭⠼⠀⢈⡁⢾⣿⠯⢞⡿⠊⠀⠀⠀⠀
⠀⠈⠉⢳⣄⣘⣲⠞⠙⠲⠤⢄⣀⣀⣁⣀⡠⢴⡾⢿⡄⠀⠀⠀⠀
⠀⠀⣈⡤⠖⠟⠀⠀⠀⠀⠀⠀⠀⣸⡆⠀⡞⠀⢈⣷⣦⢦⣤⡄
⠀⣠⠞⢁⠀⠀⡆⠀⠀⢾⠀⠀⠀⡼⢹⣁⣄⢸⡴⣮⠻⣶⣾⡯⠀
⣰⠇⠀⢨⣿⡿⢧⠀⠀⢹⡀⢀⡞⠁⢿⠀⢹⣩⠜⠙⠚⠛⠉⠀⠀
⠘⣆⠀⢶⠃⠀⠈⣇⠀⠈⢷⠋⠀⠀⠘⣆⡼⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠈⠳⠬⣃⣤⠴⢧⣤⣤⠼⡟⠋⠻⠋⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀`;

  return (
    <div className="bg-gray-900 border-4 border-purple-500 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-gray-800 transition-all duration-300 p-6 m-6 max-w-md text-center mx-auto">
      <h3 className="text-3xl font-bold text-green-400 mb-4">{title}</h3>
      <p className="text-lg italic text-gray-300 mb-4">{description}</p>
      <pre className="text-xs text-purple-400 overflow-auto ">
        {emoji}
      </pre>
    </div>
  );
}

export default Sen;