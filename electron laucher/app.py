import eel
import random
from pythonSide import *

try:
	# Set web files folder
	eel.init('web')

	start()
	eel.returnInfo()(lambda n: print('Got this from Javascript:', n))



	@eel.expose
	def test():
		print("ok")
		return "ok"

	@eel.expose
	def sendVersions():
		version = ["alpha67"]

		for i in getVersions():
			# Only add release versions
			if i["type"] == "release":
				if not "fo" in i["id"]:
					version.append(i["id"])

		return version

	options = {
		'mode': 'custom',
		'args': ['node_modules/electron/dist/electron.exe', '.']
	}

	def print_num(n):
		print('Got this from Javascript:', n)

	# Do the same with an inline lambda as callback
	@eel.expose
	def prints():
		eel.returnInfo()(lambda n: print(n))


	eel.start('hello.html', mode='custom', cmdline_args=['node_modules/electron/dist/electron.exe', '.'])

	#eel.start('hello.html')

except:
	time.sleep(20)
