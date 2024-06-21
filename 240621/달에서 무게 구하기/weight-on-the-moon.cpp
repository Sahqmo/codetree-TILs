#include <iostream>
using namespace std;

int main() {
    // 여기에 코드를 작성해주세요.
	cout << fixed;

    int mass = 13;
    double moon_g = 0.165;

    cout.precision(6);
    cout << mass << " * " << moon_g << " = " << mass * moon_g;

    return 0;
}